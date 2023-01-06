import { RingProgress } from "@mantine/core";
import React from "react";
import { useSnapshot } from "valtio";
import { budgetStore } from "../../store";

const Totals = () => {
  const budgetSnap = useSnapshot(budgetStore);

  const expenseTotal = budgetSnap.expenses.reduce(
    (acc, cur) => acc + cur.amount,
    0
  );
  const savingsTotal = budgetSnap.savings.reduce(
    (acc, cur) => acc + cur.amount,
    0
  );
  const investmentTotal = budgetSnap.investments.reduce(
    (acc, cur) => acc + cur.amount,
    0
  );
  return (
    <div className=" w-full text-center">
      <RingProgress
        size={330}
        label={
          <h2 className=" font-bold">{`TOTAL ${
            expenseTotal + savingsTotal + investmentTotal
          }`}</h2>
        }
        thickness={27}
        sections={[
          {
            value: Math.round(
              (expenseTotal / (expenseTotal + savingsTotal + investmentTotal)) *
                100
            ),
            color: "grape",
          },
          {
            value: Math.round(
              (savingsTotal / (expenseTotal + savingsTotal + investmentTotal)) *
                100
            ),
            color: "orange",
          },
          {
            value: Math.round(
              (investmentTotal /
                (expenseTotal + savingsTotal + investmentTotal)) *
                100
            ),
            color: "teal",
          },
        ]}
      />
    </div>
  );
};

export default Totals;
