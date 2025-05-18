import React from "react";
import { Progress } from "antd";

const Analytics = ({ allTransection }) => {
  // category
  const categories = [
    "salary",
    "tip",
    "project",
    "food",
    "movie",
    "bills",
    "medical",
    "fee",
    "tax",
  ];

  // total transaction
  const totalTransaction = allTransection.length;
  const totalIncomeTransactions = allTransection.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransactions = allTransection.filter(
    (transaction) => transaction.type === "expense"
  );
  const totalIncomePercent =
    (totalIncomeTransactions.length / totalTransaction) * 100;
  const totalExpensePercent =
    (totalExpenseTransactions.length / totalTransaction) * 100;

  //total turnover
  const totalTurnover = allTransection.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = allTransection
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnover = allTransection
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercent =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercent =
    (totalExpenseTurnover / totalTurnover) * 100;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-3">
        <div className="bg-slate-300 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-slate-400 p-4 border-b border-gray-600">
            <h3 className="text-gray-200 font-medium">
              Total Transactions : {totalTransaction}
            </h3>
          </div>
          <div className="p-4">
            <h5 className="text-green-400 mb-2">
              Income : {totalIncomeTransactions.length}
            </h5>
            <h5 className="text-red-400 mb-4">
              Expense : {totalExpenseTransactions.length}
            </h5>
            <div className="flex justify-center space-x-4">
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-2"
                percent={totalIncomePercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-2"
                percent={totalExpensePercent.toFixed(0)}
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-300 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-slate-400 p-4 border-b border-gray-600">
            <h3 className="text-gray-200 font-medium">
              Total TurnOver : {totalTurnover}
            </h3>
          </div>
          <div className="p-4">
            <h5 className="text-green-400 mb-2">
              Income : {totalIncomeTurnover}
            </h5>
            <h5 className="text-red-400 mb-4">
              Expense : {totalExpenseTurnover}
            </h5>
            <div className="flex justify-center space-x-4">
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-2"
                percent={totalIncomeTurnoverPercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-2"
                percent={totalExpenseTurnoverPercent.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-3 mt-6">
        <div>
          <h4 className="text-gray-200 font-medium mb-4">Categorywise Income</h4>
          <div className="space-y-4">
            {categories.map((category) => {
              const amount = allTransection
                .filter(
                  (transaction) =>
                    transaction.type === "income" &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0);
              return (
                amount > 0 && (
                  <div key={category} className="bg-slate-400 rounded-lg shadow p-4">
                    <h5 className="text-gray-300 capitalize mb-2">{category}</h5>
                    <Progress
                      percent={((amount / totalIncomeTurnover) * 100).toFixed(0)}
                      strokeColor={"#4ade80"} // green-400 equivalent
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-gray-200 font-medium mb-4">Categorywise Expense</h4>
          <div className="space-y-4">
            {categories.map((category) => {
              const amount = allTransection
                .filter(
                  (transaction) =>
                    transaction.type === "expense" &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0);
              return (
                amount > 0 && (
                  <div key={category} className="bg-slate-400 rounded-lg shadow p-4">
                    <h5 className="text-gray-300 capitalize mb-2">{category}</h5>
                    <Progress
                      percent={((amount / totalExpenseTurnover) * 100).toFixed(0)}
                      strokeColor={"#f87171"} // red-400 equivalent
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;