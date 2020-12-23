import * as React from "react";
import { View } from "react-native";
import DiamondButton from "../components/buttons/DiamondButton";
import BodyText from "../components/texts/BodyText";
import QuoteAuthor from "../components/texts/QuoteAuthor";
import feed from "../data/feed";

const quote = feed[0];

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
          {quote.quote}
        </BodyText>
        <QuoteAuthor>{quote.author}</QuoteAuthor>
      </View>
    </View>
  );
}

export default DetailScreen;
