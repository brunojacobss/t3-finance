import { CircleDollarSign, CreditCard, Wallet } from "lucide-react";
import { HighlightCard, type Highlights } from "~/components/ui/highlightCard";
import { useLayoutEffect, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { useTheme } from "next-themes";
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
        <span className="text-[#86c865] dark:text-[#29F707]">{`$${value}k`}</span>
        <span>{` - ${label}`}</span>
      </div>
    );
  }

  return null;
};

const DashboardHome = () => {
  const [selected, setSelected] = useState<Highlights>("highlight-balance");
  const widthRef = useRef<HTMLDivElement>(null);
  const [cardsWidth, setCardsWidth] = useState<number>(0);
  const { theme } = useTheme();

  useLayoutEffect(() => {
    setCardsWidth(widthRef.current?.offsetWidth || 0);
  }, []);

  const onClick = (newSelected: Highlights) => {
    setSelected(newSelected);
  };

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
    <div className="flex flex-row">
      <div className="flex w-2/3 flex-col">
        <div className="flex gap-6" ref={widthRef}>
          <HighlightCard
            id="highlight-balance"
            selected={selected === "highlight-balance"}
            onClick={onClick}
            title="Total Balance"
            value={0}
            Icon={Wallet}
          />
          <HighlightCard
            id="highlight-income"
            selected={selected === "highlight-income"}
            onClick={onClick}
            title="Total Income"
            value={0}
            Icon={CircleDollarSign}
          />
          <HighlightCard
            id="highlight-spending"
            selected={selected === "highlight-spending"}
            onClick={onClick}
            title="Total Spending"
            value={0}
            Icon={CreditCard}
          />
        </div>
        <div
          style={{ width: cardsWidth }}
          className="mt-12 bg-white p-6 dark:bg-slate-500"
        >
          <h1 className="pb-8 text-xl font-bold">Overview</h1>
          <AreaChart
            height={400}
            width={cardsWidth / 1.1}
            data={sortedData}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              stroke={theme === "dark" ? "white" : "black"}
              dataKey="date"
            />
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
              stroke={theme === "dark" ? "#29F707" : "#86c865"}
              fill={theme === "dark" ? "#29F707" : "#86c865"}
            />
          </AreaChart>
        </div>
      </div>

      <div className="ml-16 flex w-2/3 flex-col rounded-sm bg-white p-6 dark:bg-slate-500">
        hi
      </div>
    </div>
  );
};

export default DashboardHome;
