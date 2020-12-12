import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";

const ProfileeStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileeStack.Navigator>
      <ProfileeStack.Screen name="Profil" component={ProfileScreen} />
      <ProfileeStack.Screen name="Detail" component={DetailScreen} />
    </ProfileeStack.Navigator>
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
