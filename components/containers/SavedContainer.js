import React from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components";
import DescriptionText from "../texts/DescriptionHeading";
import QuoteAuthorSmall from "../texts/QuoteAuthorSmall";

function ImageContainer() {
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
            uri:
              "https://static.birgun.net/resim/haber-detay-resim/2018/11/19/sahsiyet-dizisi-dunya-listesinde-532575-5.jpg",
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
            Bir şeyi basitçe açıklayamıyorsan; yeterince iyi anlamamışsın
            demektir.
          </DescriptionText>
          <QuoteAuthorSmall numberOfLines={1} ellipsizeMode="tail">
            Albert Einstein
          </QuoteAuthorSmall>
        </View>
      </View>
    </View>
  );
}

export default ImageContainer;
