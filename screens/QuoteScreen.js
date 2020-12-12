import * as React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";

const QuoteStack = createStackNavigator();

function QuoteStackScreen() {
  return (
    <QuoteStack.Navigator>
      <QuoteStack.Screen name="Sözler" component={QuoteScreen} />
      <QuoteStack.Screen name="Detail" component={DetailScreen} />
    </QuoteStack.Navigator>
  );
}

function QuoteScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Alıntılar</Text>
      <Button
        title="Detaya git"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

export default QuoteStackScreen;
