import * as React from "react";
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { View, Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//Components

import DetailScreen from "./DetailScreen";
import {
  Book,
  Clapper,
  Diamond,
  Information,
  RightArrowLong,
} from "../components/Icons";
import HeadingBold from "../components/texts/HeadingBold";
import MainContainer from "../components/containers/MainContainer";
import ExploreContainer from "../components/containers/ExploreContainer";
import Subheading from "../components/texts/Subheading";

//Stack-start

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
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => alert("This is a button!")}
            >
              <Information />
            </TouchableOpacity>
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

//Stack-end

//Body-start

function QuoteScreen({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#F9FFDE",
        flex: 1,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeadingBold>Günlük{"\n"}dozunu al 💊</HeadingBold>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Detail")}>
          <MainContainer onPress={() => navigation.navigate("Detail")}>
            <Subheading style={{ color: "#F9FFDE", marginBottom: 8 }}>
              İşte günün{"\n"}sana özel sözü
            </Subheading>
            <RightArrowLong style={{ marginLeft: 18 }} />
          </MainContainer>
        </TouchableWithoutFeedback>

        <HeadingBold>Keşfet</HeadingBold>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Detail")}
          style={{ marginBottom: 18 }}
        >
          <ExploreContainer>
            <Book style={{ marginLeft: 18, marginBottom: 10 }} />
            <Subheading style={{ marginBottom: 10 }}>
              Kitaplardan Alıntılar
            </Subheading>
          </ExploreContainer>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Detail")}
          style={{ marginBottom: 18 }}
        >
          <ExploreContainer>
            <Clapper style={{ marginLeft: 18, marginBottom: 10 }} />
            <Subheading style={{ marginBottom: 10 }}>
              Film / Dizilerden Alıntılar
            </Subheading>
          </ExploreContainer>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Detail")}
          style={{ marginBottom: 18 }}
        >
          <ExploreContainer>
            <Diamond style={{ marginLeft: 18, marginBottom: 10 }} />
            <Subheading style={{ marginBottom: 10 }}>
              Tanınmış Kişilerden Alıntılar
            </Subheading>
          </ExploreContainer>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

export default QuoteStackScreen;
