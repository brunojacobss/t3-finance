import { CircleDollarSign, CreditCard, Wallet } from "lucide-react";
import { HighlightCard, type Highlights } from ".";
import { useLayoutEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import { BalanceChart } from "./balanceChart";
import { Progress } from "../progress";
import { primaryDarkModeGreen } from "~/shared/consts";

export const DashboardHome = () => {
  const [selected, setSelected] = useState<Highlights>("highlight-balance");
  const widthRef = useRef<HTMLDivElement>(null);
  const [cardsWidth, setCardsWidth] = useState<number>(0);

  useLayoutEffect(() => {
    setCardsWidth(widthRef.current?.offsetWidth || 0);
  }, []);

  const onClick = (newSelected: Highlights) => {
    setSelected(newSelected);
  };

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
          className="mt-12 rounded-sm bg-white p-6 dark:bg-slate-500"
        >
          <h1 className="pb-8 text-xl font-bold">Overview</h1>
          <BalanceChart width={cardsWidth} />
        </div>
      </div>

      <div className="ml-16 flex w-2/3 flex-col rounded-sm bg-white p-6 dark:bg-slate-500">
        <h1 className="pb-8 text-xl font-bold">Budgets</h1>
        <div className="flex flex-row justify-between">
          <span className="text-md font-bold">Food</span>
          <div className="flex flex-row gap-8">
            <span className="text-md font-bold">S/ 468.80</span>
            <span className="text-md">67%</span>
          </div>
        </div>
        <Progress className="mt-2" value={33} />
      </div>
    </div>
  );
};
