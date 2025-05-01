import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-04-28"),
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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);
    default:
      return state;
  }
}

export const ExpenseContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: { id: id } });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};
