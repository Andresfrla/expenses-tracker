import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  function stripTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = stripTime(new Date());
    const date7DaysAgo = getDateMinusDays(today, 7);
    const expenseDate = stripTime(expense.date);

    return expenseDate > date7DaysAgo;
  })

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />;
}

export default RecentExpenses;
