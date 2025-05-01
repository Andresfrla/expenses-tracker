import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [editedExpenseId, isEditing]);

  return (
    <View>
      <Text>Manage Expense</Text>
    </View>
  );
}

export default ManageExpense;
