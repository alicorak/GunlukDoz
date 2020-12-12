import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import { Information } from "../components/Icons";

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: "#F9FFDE",
        headerStyle: { backgroundColor: "#007236" },
      }}
    >
      <ProfileStack.Screen
        name="Profil"
        component={ProfileScreen}
        name="Profil"
        component={ProfileScreen}
        options={{
          title: "Günlük Doz",
          headerRight: () => (
            <Information
              style={{ marginRight: 16 }}
              onPress={() => alert("This is a button!")}
            />
          ),
        }}
      />
      <ProfileStack.Screen name="Detail" component={DetailScreen} />
    </ProfileStack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profil</Text>
    </View>
  );
}

export default ProfileStackScreen;
