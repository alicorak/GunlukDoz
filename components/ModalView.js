import React, { useState } from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Information, LeftArrow } from "../components/Icons";
import Subheading from "../components/texts/Subheading";
import HeadingBold from "../components/texts/HeadingBold";
import MovieButton from "../components/buttons/MovieButton";
import BookButton from "../components/buttons/BookButton";
import DiamondButton from "../components/buttons/DiamondButton";
import DescriptionText from "./texts/DescriptionText";
import DescriptionHeading from "./texts/DescriptionHeading";

const ModalView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <SafeAreaView>
          <TouchableHighlight
            style={{ ...styles.openButton }}
            onPress={() => {
              setModalVisible(!modalVisible);
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
            <DiamondButton />
          </View>
          <DescriptionText>
            Günlük Doz,istediğin zaman sana alıntılar sunan bir uygulama. Hiç
            bir gelir elde etme amacı yok. Bu nedenle telif talep etmeyin
            ödeyemem :)
          </DescriptionText>
          <DescriptionHeading
            style={{ marginHorizontal: 24, marginVertical: 24 }}
          >
            Hakkında Daha Fazlası
          </DescriptionHeading>
          <DescriptionText>
            Tasarımı Figma Community, yazılımı GitHub üzerinden tamamen açık
            kaynaklı 🖤 {"\n"}
            {"\n"}Ali ÇORAK tarafından tasarlandı ve kodlandı.
          </DescriptionText>
        </SafeAreaView>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Information />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: "#007236",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default ModalView;
