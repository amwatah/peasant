import { proxy } from "valtio";

export type TransactionType = "expense" | "saving" | "investment";
interface BudgetItem {
  name: string;
  amount: number;
  type: TransactionType;
}
interface Store {
  expenses: BudgetItem[];
  savings: BudgetItem[];
  investments: BudgetItem[];
}
export const budgetStore = proxy<Store>({
  expenses: [],
  savings: [],
  investments: [],
});

export function AddTransaction(transaction: BudgetItem) {
  if (transaction.type === "expense") {
    budgetStore.expenses = [...budgetStore.expenses, transaction];
  }
  if (transaction.type === "saving") {
    budgetStore.savings = [...budgetStore.savings, transaction];
  }
  if (transaction.type === "investment") {
    budgetStore.investments = [...budgetStore.investments, transaction];
  }
}

export function DeleteTransation(transactionToDelete: BudgetItem) {
  if (transactionToDelete.type === "expense") {
    budgetStore.expenses = budgetStore.expenses.filter(
      (budgetItem) => budgetItem.name !== transactionToDelete.name
    );
  }
  if (transactionToDelete.type === "saving") {
    budgetStore.savings = budgetStore.savings.filter(
      (budgetItem) => budgetItem.name !== transactionToDelete.name
    );
  }
  if (transactionToDelete.type === "investment") {
    budgetStore.investments = budgetStore.investments.filter(
      (budgetItem) => budgetItem.name !== transactionToDelete.name
    );
  }
}
