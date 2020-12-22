import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import { Information } from "../components/Icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalView from "../components/ModalView";
import AppModal from "../components/AppModal";
import { useNavigation } from "@react-navigation/native";

const FavoriteStack = createStackNavigator();
let popUpRef = React.createRef();

function FavoriteStackScreen() {
  const navigation = useNavigation();

  const onShowPopUp = () => {
    popUpRef.setModalVisible();
  };

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
        component={FavoriteScreen}
        options={{
          title: "Günlük Doz",
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }} onPress={onShowPopUp}>
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
      <AppModal ref={(target) => (popUpRef = target)} />
    </View>
  );
}

export default FavoriteStackScreen;
