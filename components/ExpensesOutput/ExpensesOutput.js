import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-01-12"),
  },
  {
    id: "e2",
    description: "A pair of pants",
    amount: 39.99,
    date: new Date("2025-01-13"),
  },
  {
    id: "e3",
    description: "A book",
    amount: 29.99,
    date: new Date("2025-01-14"),
  },
  {
    id: "e4",
    description: "A new TV",
    amount: 799.99,
    date: new Date("2025-01-15"),
  },
  {
    id: "e5",
    description: "A new laptop",
    amount: 1299.99,
    date: new Date("2025-01-16"),
  },
  {
    id: "e6",
    description: "A new phone",
    amount: 999.99,
    date: new Date("2025-01-17"),
  },
  {
    id: "e7",
    description: "A new tablet",
    amount: 499.99,
    date: new Date("2025-01-18"),
  },
  {
    id: "e8",
    description: "A new watch",
    amount: 199.99,
    date: new Date("2025-01-19"),
  },
  {
    id: "e9",
    description: "A new camera",
    amount: 899.99,
    date: new Date("2025-01-20"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
