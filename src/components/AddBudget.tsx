/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useLocalStorage } from "@mantine/hooks";
import { Button, NumberInput, Select, TextInput } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useState } from "react";
import { AddTransaction, TransactionType } from "../../store";

const AddBudget = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<"expense" | "saving" | "investment">(
    "expense"
  );
  const [amount, setAmount] = useState(0);

  function makeTransation() {
    AddTransaction({
      name: title,
      type: type,
      amount: amount,
    });
    setTitle("");
    setType("expense");
    setAmount(0);
    showNotification({
      message: `${title} added`,
      title: "SUCESS",
      autoClose: 2000,
    });
  }

  return (
    <div className=" m-1 flex flex-col gap-y-1">
      <TextInput
        value={title}
        placeholder="name e.g netflix fee"
        onChange={(e) => setTitle(e.target.value)}
      />

      <Select
        value={type}
        onChange={(val) => setType(val!)}
        data={[
          { value: "expense", label: "Expense" },
          { value: "saving", label: "Saving" },
          { value: "investment", label: "Investment" },
        ]}
      />
      <NumberInput value={amount} onChange={(val) => setAmount(val!)} />
      <Button onClick={makeTransation}>MAKE TRANSACTION</Button>
    </div>
  );
};

export default AddBudget;
