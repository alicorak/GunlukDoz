import React from "react";
import { Diamond } from "../Icons";
import QuoteButton from "../QuoteButton";
import DescriptionHeading from "../texts/DescriptionHeading";

function DiamondButton() {
  return (
    <QuoteButton
      disabled={true}
      style={{
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 171,
      }}
    >
      <Diamond style={{ marginRight: 10 }} />
      <DescriptionHeading
        style={{
          color: "#FF5000",
        }}
      >
        Tanınmış Kişiler
      </DescriptionHeading>
    </QuoteButton>
  );
}

export default DiamondButton;
