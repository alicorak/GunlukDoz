import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";

const FavoriteStack = createStackNavigator();

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favoriler" component={FavoriteScreen} />
      <FavoriteStack.Screen name="Detail" component={DetailScreen} />
    </FavoriteStack.Navigator>
  );
}

function FavoriteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Favoriler</Text>
    </View>
  );
}

export default FavoriteStackScreen;
