import React, { Component } from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  Linking,
  TouchableHighlight,
  View,
  Text,
} from "react-native";
import { Information, LeftArrow } from "../components/Icons";
import Subheading from "../components/texts/Subheading";
import HeadingBold from "../components/texts/HeadingBold";
import MovieButton from "../components/buttons/MovieButton";
import BookButton from "../components/buttons/BookButton";
import DiamondButton from "../components/buttons/DiamondButton";
import DescriptionText from "./texts/DescriptionText";
import DescriptionHeading from "./texts/DescriptionHeading";
import PillButton from "./buttons/PillButton";

class AppModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal
          name="AppModal"
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <SafeAreaView>
            <TouchableHighlight
              style={{
                backgroundColor: "#F9FFDE",
                borderRadius: 20,
                elevation: 2,
              }}
              onPress={() => {
                this.setModalVisible(!modalVisible);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 24,
                }}
              >
                <LeftArrow />
                <Subheading style={{ marginLeft: 5, marginBottom: 0 }}>
                  Geri
                </Subheading>
              </View>
            </TouchableHighlight>

            <View style={{ backgroundColor: "#F9FFDE" }}>
              <HeadingBold>Günlük{"\n"}Doz</HeadingBold>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20, //Button margin-left:4px
                  marginVertical: 24,
                }}
              >
                <MovieButton />
                <BookButton />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  marginTop: -16,
                  marginBottom: 24,
                }}
              >
                <DiamondButton />
              </View>
              <DescriptionText>
                Günlük Doz,istediğin zaman sana alıntılar sunan bir uygulama.
                Hiç bir gelir elde etme amacı yok. Bu nedenle telif talep
                etmeyin ödeyemem :)
              </DescriptionText>
              <PillButton />
              <DescriptionHeading
                style={{ marginHorizontal: 24, marginVertical: 24 }}
              >
                Hakkında Daha Fazlası
              </DescriptionHeading>
              <DescriptionText>
                Tasarımı{" "}
                <DescriptionText
                  style={{ color: "#FF5000" }}
                  onPress={() =>
                    Linking.openURL("https://www.figma.com/@alicorak")
                  }
                >
                  Figma Community
                </DescriptionText>
                , yazılımı{" "}
                <DescriptionText
                  style={{ color: "#FF5000" }}
                  onPress={() =>
                    Linking.openURL("https://www.github.com/alicorak")
                  }
                >
                  GitHub
                </DescriptionText>{" "}
                üzerinden tamamen açık kaynaklı 🖤 {"\n"}
                {"\n"}
                <DescriptionText
                  style={{ color: "#FF5000" }}
                  onPress={() => Linking.openURL("https://alicorak.com")}
                >
                  Ali ÇORAK
                </DescriptionText>{" "}
                tarafından tasarlandı ve kodlandı.
              </DescriptionText>
            </View>
          </SafeAreaView>
        </Modal>

        <TouchableHighlight
          style={{
            backgroundColor: "#007236",
            borderRadius: 20,
            padding: 10,
            elevation: 2,
          }}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Information />
        </TouchableHighlight>
      </View>
    );
  }
}

export default AppModal;
