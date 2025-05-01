import { FlatList, Text, View } from "react-native";

function renderExpenseItem(itemData) {
  return (
    <View>
      <Text>{itemData.item.description}</Text>
      <Text>${itemData.item.amount.toFixed(2)}</Text>
      <Text>{itemData.item.date.toLocaleDateString()}</Text>
    </View>
  );
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
