import * as React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import AppModal from "../components/AppModal";
import { useNavigation } from "@react-navigation/native";
import MovieButton from "../components/buttons/MovieButton";
import BookButton from "../components/buttons/BookButton";
import DiamondButton from "../components/buttons/DiamondButton";
import HeadingBold from "../components/texts/HeadingBold";
import SavedContainer from "../components/containers/SavedContainer";

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
            <TouchableOpacity style={{ marginRight: 6 }} onPress={onShowPopUp}>
              <AppModal ref={(target) => (popUpRef = target)} />
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
        backgroundColor: "#F9FFDE",
      }}
    >
      <View>
        <HeadingBold>Favorilerim</HeadingBold>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginBottom: 16,
          }}
        >
          <View
            flexDirection="row"
            style={{
              marginHorizontal: 24,
            }}
          >
            <MovieButton />
            <BookButton />
            <DiamondButton />
          </View>
        </ScrollView>
        <ScrollView style={{ height: "100%" }}>
          <SavedContainer />
          <SavedContainer />
          <SavedContainer />
          <SavedContainer />
        </ScrollView>
      </View>
    </View>
  );
}

export default FavoriteStackScreen;
