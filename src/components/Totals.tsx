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
    <div className=" flex w-full justify-center text-center">
      <RingProgress
        size={330}
        rootColor="dark"
        label={
          <h2 className=" font-bold">{`TOTAL ${
            expenseTotal + savingsTotal + investmentTotal
          }`}</h2>
        }
        thickness={27}
        sections={[
          {
            value:
              (expenseTotal / (expenseTotal + savingsTotal + investmentTotal)) *
              100,
            color: "grape",
            tooltip: `EXPENSES :  ${expenseTotal} (${
              (expenseTotal / (expenseTotal + savingsTotal + investmentTotal)) *
              100
            }%)`,
          },
          {
            value:
              (savingsTotal / (expenseTotal + savingsTotal + investmentTotal)) *
              100,
            color: "orange",
            tooltip: `SAVINGS :  ${savingsTotal} (${
              (savingsTotal / (expenseTotal + savingsTotal + investmentTotal)) *
              100
            }%)`,
          },
          {
            value:
              (investmentTotal /
                (expenseTotal + savingsTotal + investmentTotal)) *
              100,
            color: "teal",
            tooltip: `INVESTMENTS :  ${investmentTotal} (${
              (investmentTotal /
                (expenseTotal + savingsTotal + investmentTotal)) *
              100
            }%)`,
          },
        ]}
      />
    </div>
  );
};

export default Totals;
