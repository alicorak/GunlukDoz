import * as React from "react";
import { View } from "react-native";
import DiamondButton from "../components/buttons/DiamondButton";
import BodyText from "../components/texts/BodyText";
import QuoteAuthor from "../components/texts/QuoteAuthor";

function DetailScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F9FFDE",
      }}
    >
      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
        }}
      >
        <DiamondButton />
        <BodyText
          style={{
            marginTop: 24,
            marginBottom: 18,
          }}
        >
          Bir şeyi basitçe açıklayamıyorsan, yeterince anlamamışsın demektir.
        </BodyText>
        <QuoteAuthor>Albert Einstein</QuoteAuthor>
      </View>
    </View>
  );
}

export default DetailScreen;
