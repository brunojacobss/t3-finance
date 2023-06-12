import { Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { cn } from "~/lib/utils";
import { Button } from "../button";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import { useTabStore } from "~/store/zustand";

const generateTransaction = () => {
  return {
    id: uuid(),
    category: "Food & Drinks",
    amount: faker.finance.amount(),
    date: faker.date.past(),
    currency: "S/",
    account: faker.finance.accountName(),
    type: "Expense",
  };
};

export const Transactions = () => {
  const { changeTab } = useTabStore();

  const txs = Array.from({ length: 10 }, generateTransaction).sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <Card className="mt-12 h-[100%] w-[100%] rounded-sm">
      <CardHeader>
        <CardTitle>
          <h1 className="text-xl font-bold">Transactions</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        {txs.map(
          ({ id, category, amount, date, currency, account, type }, i) => (
            <div key={id}>
              <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full border border-primary p-2">
                    <Utensils />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-bold">{category}</span>
                    <span className="font-extralight">{account}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={cn("font-bold", {
                      "text-red-500": type === "Expense",
                    })}
                  >
                    {type === "Expense" && "- "} {currency} {amount}
                  </span>
                  <span className="font-extralight">
                    {date.toLocaleString([], {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
              {i !== txs.length - 1 && <hr className="my-2" />}
            </div>
          )
        )}
        <Button
          onClick={() => changeTab("transactions")}
          className="mt-4 w-[20%] self-center"
        >
          View All
        </Button>
      </CardContent>
    </Card>
  );
};
