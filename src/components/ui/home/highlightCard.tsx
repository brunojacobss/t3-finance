import type { LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";

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
  const selectedBackground = selected
    ? "bg-gray-300 dark:bg-background"
    : "bg-white dark:bg-slate-500";
  const selectedValueFont = selected
    ? "text-black dark:text-white"
    : "text-black";
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
  const iconBackground = selected ? "bg-primary" : "bg-secondary";
  return (
    <div
      id={id}
      onClick={() => onClick(id)}
      className={`flex h-52 w-56 flex-col gap-4 rounded-sm ${selectedBackground} cursor-pointer p-6`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full ${iconBackground}`}
      >
        <Icon color={iconColor} size={36} />
      </div>
      <span className={selectedTitleFont}>{title}</span>
      <span className={`font-bold ${selectedValueFont} sm:text-2xl`}>
        {formatCurrency(value)}
      </span>
    </div>
  );
};
