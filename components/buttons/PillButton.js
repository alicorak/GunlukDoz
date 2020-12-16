import React from "react";
import { Pill } from "../Icons";
import QuoteButton from "../QuoteButton";
import DescriptionHeading from "../texts/DescriptionHeading";

function PillButton() {
  return (
    <QuoteButton
      // disabled={false}
      onPress={() => alert("This is a button!")}
      style={{
        marginVertical: 24,
        marginHorizontal: 24,
        flexDirection: "row",
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#007236",
        borderRadius: 5,
        backgroundColor: "#007236",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
      }}
    >
      <DescriptionHeading style={{ color: "#F9FFDE" }}>
        Günlük Dozunu Al
      </DescriptionHeading>
      <Pill style={{ marginLeft: 10 }} />
    </QuoteButton>
  );
}

export default PillButton;
