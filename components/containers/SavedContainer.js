import React from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components";
import DescriptionText from "../texts/DescriptionHeading";
import QuoteAuthorSmall from "../texts/QuoteAuthorSmall";

function SavedContainer(props) {
  const favorite = props.favorite;
  return (
    <View
      style={{
        marginHorizontal: 24,
        padding: 12,
        height: 131,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#FF5000",
        marginTop: 8, //HeadingMedium
      }}
    >
      <View flexDirection="row" justifyContent="space-between">
        <Image
          source={{
            uri: favorite.image,
          }}
          style={{
            minHeight: "100%",
            width: 80,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            marginLeft: -12,
            marginRight: 60, // Why??? It's need to be 24

            paddingHorizontal: 24,
          }}
        >
          <DescriptionText numberOfLines={2} ellipsizeMode="tail">
            {favorite.quote}
          </DescriptionText>
          <QuoteAuthorSmall numberOfLines={1} ellipsizeMode="tail">
            {favorite.author}
          </QuoteAuthorSmall>
        </View>
      </View>
    </View>
  );
}

export default SavedContainer;
