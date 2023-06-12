import { CircleDollarSign, CreditCard, Wallet } from "lucide-react";
import { HighlightCard, type Highlights } from "./highlightCard";
import { useState } from "react";
import { BalanceChart } from "./balanceChart";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Budgets } from "./budgets";
import { Transactions } from "./transactions";

export const DashboardHome = () => {
  const [selected, setSelected] = useState<Highlights>("highlight-balance");

  const onClick = (newSelected: Highlights) => {
    setSelected(newSelected);
  };

  return (
    <div>
      <div className="flex h-[70%] flex-row justify-between">
        <div className="flex w-3/5 flex-col">
          <div className="flex gap-6">
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
          <Card className="mt-12 h-[100%] w-[100%] rounded-sm">
            <CardHeader>
              <CardTitle>
                <h1 className="text-xl font-bold">Overview</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[85%]">
              <BalanceChart />
            </CardContent>
          </Card>
        </div>
        <div className="w-1/3">
          <Budgets />
        </div>
      </div>
      <div>
        <Transactions />
      </div>
    </div>
  );
};
