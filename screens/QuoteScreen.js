import * as React from "react";
import { View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import { Information } from "../components/Icons";
import HeadingBold from "../components/texts/HeadingBold";
import HeadingMedium from "../components/texts/HeadingMedium";
import BodyText from "../components/texts/BodyText";
import QuoteAuthor from "../components/texts/QuoteAuthor";
import Subheading from "../components/texts/Subheading";
import DescriptionText from "../components/texts/DescriptionText";

const QuoteStack = createStackNavigator();

function QuoteStackScreen() {
  return (
    <QuoteStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: "#F9FFDE",
        headerStyle: { backgroundColor: "#007236" },
      }}
    >
      <QuoteStack.Screen
        name="Sözler"
        component={QuoteScreen}
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
      <QuoteStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "",
        }}
      />
    </QuoteStack.Navigator>
  );
}

function QuoteScreen({ navigation }) {
  return (
    <View>
      <HeadingBold>Günlük{"\n"}dozunu al 💊</HeadingBold>
      <BodyText>
        Bir şeyi basitçe açıklayamıyorsan, yeterince anlamamışsın demektir.
      </BodyText>
      <QuoteAuthor>Albert Einstein</QuoteAuthor>
      <Subheading>Kitaplardan alıntılar</Subheading>
      <DescriptionText>
        Günlük Doz,istediğin zaman sana alıntılar sunan bir uygulama. Hiç bir
        gelir elde etme amacı yok. Bu nedenle telif talep etmeyin ödeyemem :)
      </DescriptionText>
      <HeadingMedium>
        Merhaba,
        <HeadingBold> Ali</HeadingBold>
      </HeadingMedium>

      <Button
        title="Detaya git"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

export default QuoteStackScreen;
