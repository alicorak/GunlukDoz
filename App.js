import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QuoteScreen from "./screens/QuoteScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Favorite, User, QuoteFill } from "./components/Icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Sözler"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Favoriler") {
              focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              return <Favorite size={size} stroke={color} />;
            } else if (route.name === "Sözler") {
              focused ? "ios-list-box" : "ios-list";
              return <QuoteFill size={size} stroke={color} />;
            } else if (route.name === "Profil") {
              focused ? "ios-list-box" : "ios-list";
              return <User size={size} stroke={color} />;
            }

            // You can return any component that you like here!
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FF5000",
          inactiveTintColor: "#F9FFDE",
        }}
      >
        <Tab.Screen name="Favoriler" component={FavoriteScreen} />
        <Tab.Screen name="Sözler" component={QuoteScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
