import type { LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { cn } from "~/lib/utils";

const formatCurrency = (amount?: number) => {
  if (!amount) return "$0.00";
  return `$${amount.toFixed(2)}`;
};

export type Highlights =
  | "highlight-balance"
  | "highlight-income"
  | "highlight-spending";

type Props = {
  id: Highlights;
  title: string;
  value?: number;
  selected?: boolean;
  onClick: (newSelected: Highlights) => void;
  Icon: LucideIcon;
};

export const HighlightCard = ({
  id,
  title,
  value,
  selected,
  onClick,
  Icon,
}: Props) => {
  const { theme } = useTheme();
  const selectedTitleFont = selected
    ? "text-slate-500"
    : "text-slate-500 dark:text-slate-800";
  const iconColor = selected
    ? theme === "dark"
      ? "#0f1729"
      : "#f8fafc"
    : theme === "dark"
    ? "#f8fafc"
    : "#0f1729";
  return (
    <Card
      id={id}
      onClick={() => onClick(id)}
      className={cn("flex w-[100%] cursor-pointer flex-col rounded-sm", {
        "bg-white dark:bg-background": selected,
        "bg-gray-200 dark:bg-slate-500": !selected,
      })}
    >
      <CardHeader>
        <CardTitle
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full",
            {
              "bg-primary": selected,
              "bg-secondary": !selected,
            }
          )}
        >
          <Icon color={iconColor} size={36} />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <span className={selectedTitleFont}>{title}</span>

        <span className="font-bold sm:text-2xl">{formatCurrency(value)}</span>
      </CardContent>
    </Card>
  );
};
