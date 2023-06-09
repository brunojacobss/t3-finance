import { Progress } from "../progress";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

const generateBudget = () => {
  return {
    id: uuid(),
    name: faker.word.noun(),
    amount: faker.finance.amount(),
    percentage: faker.number.int(100),
  };
};

export const Budgets = () => {
  const arr = Array.from({ length: 8 }, generateBudget);
  return (
    <Card className="flex h-[100%] w-[100%] flex-col overflow-scroll rounded-sm">
      <CardHeader>
        <CardTitle>
          <h1 className="text-xl font-bold">Budgets</h1>
        </CardTitle>
      </CardHeader>
      {arr.map(({ id, amount, name, percentage }) => (
        <CardContent key={id}>
          <div className="flex flex-row justify-between">
            <span className="text-md font-bold">{name}</span>
            <div className="flex flex-row gap-8">
              <span className="text-md font-bold">S/ {amount}</span>
              <span className="text-md">{percentage}%</span>
            </div>
          </div>
          <Progress className="mt-2" value={percentage} />
        </CardContent>
      ))}
    </Card>
  );
};
