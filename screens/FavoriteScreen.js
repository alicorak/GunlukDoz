import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import { Information } from "../components/Icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalView from "../components/ModalView";
const FavoriteStack = createStackNavigator();

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: "#F9FFDE",
        headerStyle: { backgroundColor: "#007236" },
      }}
    >
      <FavoriteStack.Screen
        name="Favoriler"
        component={FavoriteScreen}
        name="Profil"
        name="Profil"
        component={FavoriteScreen}
        options={{
          title: "Günlük Doz",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => alert("This is a button!")}
            >
              <Information />
            </TouchableOpacity>
          ),
        }}
      />
      <FavoriteStack.Screen name="Detail" component={DetailScreen} />
    </FavoriteStack.Navigator>
  );
}

function FavoriteScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9FFDE",
      }}
    >
      <Text>Favoriler</Text>
      <ModalView />
    </View>
  );
}

export default FavoriteStackScreen;
