import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { useTheme } from "next-themes";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type {
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

type ArrayData = {
  date: string;
  value: string;
};

type TooltipProps = {
  active?: boolean;
  payload?: Payload<ValueType, string | number>[];
  label: string;
};

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    const value = payload[0]?.value as string;
    return (
      <div className="rounded-md bg-white p-2 shadow-md dark:bg-slate-500">
        <span className="text-foreground dark:text-background">{`$${value}k`}</span>
        <span>{` - ${label}`}</span>
      </div>
    );
  }

  return null;
};

type ChartProps = {
  width: number;
};

export const BalanceChart = ({ width }: ChartProps) => {
  const { theme } = useTheme();

  const createEntry = (): ArrayData => {
    const newDate = dayjs(
      faker.date.between({ from: "2023-05-08", to: "2023-06-07" })
    );
    return {
      date: newDate.toISOString(),
      value: faker.finance.amount({ min: 100000, max: 180000 }),
    };
  };

  const data = Array.from({ length: 30 }, createEntry);
  const sortedData = data
    .sort((a, b) => {
      const dateA = dayjs(a.date);
      const dateB = dayjs(b.date);
      return dateA.isAfter(dateB) ? 1 : -1;
    })
    .map((entry) => ({
      value: (Number(entry.value) / 1000.0).toFixed(0),
      date: dayjs(entry.date).format("DD/MM"),
    }));

  return (
    <AreaChart
      height={400}
      width={width / 1.1}
      data={sortedData}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" opacity={"50%"} />
      <XAxis stroke={theme === "dark" ? "white" : "black"} dataKey="date" />
      <YAxis
        domain={[80, 190]}
        tickCount={10}
        stroke={theme === "dark" ? "white" : "black"}
        unit={"k"}
      />
      <Tooltip
        content={({ active, payload, label }) => (
          <CustomTooltip
            active={active}
            payload={payload}
            label={label as string}
          />
        )}
      />
      <Area
        type="monotone"
        dataKey="value"
        stroke={theme === "dark" ? "#f8fafc" : "#0f1729"}
        fill={theme === "dark" ? "#f8fafc" : "#0f1729"}
      />
    </AreaChart>
  );
};
