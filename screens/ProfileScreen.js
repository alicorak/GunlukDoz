import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import { Information } from "../components/Icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import HeadingMedium from "../components/texts/HeadingMedium";
import HeadingBold from "../components/texts/HeadingBold";
import ImageContainer from "../components/containers/ImageContainer";
import ProfileText from "../components/texts/ProfileText";
import ProfileTextBold from "../components/texts/ProfileTextBold";
import AppModal from "../components/AppModal";
import { useNavigation } from "@react-navigation/native";

const ProfileStack = createStackNavigator();
let popUpRef = React.createRef();

function ProfileStackScreen() {
  const navigation = useNavigation();

  const onShowPopUp = () => {
    popUpRef.setModalVisible();
  };

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
            <TouchableOpacity style={{ marginRight: 6 }} onPress={onShowPopUp}>
              <AppModal ref={(target) => (popUpRef = target)} />
            </TouchableOpacity>
          ),
        }}
      />
      <ProfileStack.Screen name="Detail" component={DetailScreen} />
    </ProfileStack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F9FFDE",
      }}
    >
      <ScrollView>
        <HeadingMedium>
          Merhaba,{"\n"}
          <HeadingBold>Ali 👋</HeadingBold>
        </HeadingMedium>
        <ImageContainer />
        <ProfileText>
          Bugün "<ProfileTextBold>Şahsiyet</ProfileTextBold>" dizisindeki "
          <ProfileTextBold>
            Vicdan denen şey bağırsak gibidir. Sen uyurken de çalışır.
          </ProfileTextBold>
          " sözü gibisin...
        </ProfileText>
      </ScrollView>
    </View>
  );
}

export default ProfileStackScreen;
