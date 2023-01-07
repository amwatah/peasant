import React from "react";
import { useSnapshot } from "valtio";
import { budgetStore, DeleteTransation } from "../../store";
import { Icon } from "@iconify/react";
import baselineDeleteOutline from "@iconify/icons-ic/baseline-delete-outline";
import { ActionIcon, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

const History = () => {
  const budgetSnapShot = useSnapshot(budgetStore);
  return (
    <div className=" container mx-auto my-5 grid  w-full gap-2 sm:grid-cols-3">
      <section className="expenses text-center">
        <Text color="grape" className=" font-bold uppercase">
          EXPENSES
        </Text>
        {budgetSnapShot.expenses.map((expense, index) => (
          <div
            key={index}
            className="  flex w-full items-center justify-between p-2 shadow-lg"
          >
            <span className=" font-bold uppercase">{expense.name}</span>
            <span className=" font-bold">
              {new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "Ksh",
              }).format(expense.amount)}
            </span>
            <ActionIcon className=" shadow-2xl">
              <Icon
                onClick={() => {
                  DeleteTransation(expense);
                  showNotification({
                    message: `${expense.name} DELETED expenses`,
                    title: "DELETED",
                  });
                }}
                className=" text-2xl  text-red-700"
                icon={baselineDeleteOutline}
              />
            </ActionIcon>
          </div>
        ))}
      </section>
      <section className="expenses text-center">
        <Text color="teal" className=" font-bold uppercase">
          INVESTMENTS
        </Text>
        {budgetSnapShot.investments.map((expense, index) => (
          <div key={index} className=" flex w-full justify-between">
            <span className=" font-bold uppercase">{expense.name}</span>
            <span className=" font-bold">
              {new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "Ksh",
              }).format(expense.amount)}
            </span>
            <ActionIcon className=" shadow-2xl">
              <Icon
                onClick={() => {
                  DeleteTransation(expense);
                  showNotification({
                    message: `${expense.name} DELETED from investments`,
                    title: "DELETED ",
                  });
                }}
                className=" text-2xl  text-red-700"
                icon={baselineDeleteOutline}
              />
            </ActionIcon>
          </div>
        ))}
      </section>
      <section className="expenses text-center">
        <Text color="orange" className=" font-bold uppercase">
          SAVINGS
        </Text>
        {budgetSnapShot.savings.map((expense, index) => (
          <div key={index} className=" flex w-full justify-between">
            <span className=" font-bold uppercase">{expense.name}</span>
            <span className=" font-bold">
              {new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "Ksh",
              }).format(expense.amount)}
            </span>
            <ActionIcon className=" shadow-2xl">
              <Icon
                onClick={() => {
                  DeleteTransation(expense);
                  showNotification({
                    message: `${expense.name} from savings`,
                    title: "DELETED",
                  });
                }}
                className=" text-2xl  text-red-700"
                icon={baselineDeleteOutline}
              />
            </ActionIcon>
          </div>
        ))}
      </section>
    </div>
  );
};

export default History;
