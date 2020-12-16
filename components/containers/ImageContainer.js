import React from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components";

function ImageContainer() {
  return (
    <View
      style={{
        marginHorizontal: 24,
        marginTop: 6, //HeadingMedium
      }}
    >
      <Image
        source={{
          uri:
            "https://static.birgun.net/resim/haber-detay-resim/2018/11/19/sahsiyet-dizisi-dunya-listesinde-532575-5.jpg",
        }}
        style={{
          width: "100%",
          height: 160,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#FF5000",
          overflow: "hidden",
        }}
      />
    </View>
  );
}

export default ImageContainer;
