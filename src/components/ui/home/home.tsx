import { CircleDollarSign, CreditCard, Wallet } from "lucide-react";
import { HighlightCard, type Highlights } from ".";
import { useState } from "react";
import { BalanceChart } from "./balanceChart";
import { Progress } from "../progress";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

export const DashboardHome = () => {
  const [selected, setSelected] = useState<Highlights>("highlight-balance");

  const onClick = (newSelected: Highlights) => {
    setSelected(newSelected);
  };

  return (
    <div className="flex flex-row justify-between">
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
        <Card className="mt-12 w-[100%] rounded-sm">
          <CardHeader>
            <CardTitle>
              <h1 className="text-xl font-bold">Overview</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BalanceChart />
          </CardContent>
        </Card>
      </div>

      <Card className="flex w-1/3 flex-col rounded-sm">
        <CardHeader>
          <CardTitle>
            <h1 className="text-xl font-bold">Budgets</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row justify-between">
            <span className="text-md font-bold">Food</span>
            <div className="flex flex-row gap-8">
              <span className="text-md font-bold">S/ 468.80</span>
              <span className="text-md">67%</span>
            </div>
          </div>
          <Progress className="mt-2" value={33} />
        </CardContent>
      </Card>
    </div>
  );
};
