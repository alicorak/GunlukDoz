import React from "react";
import { Book } from "../Icons";
import QuoteButton from "../QuoteButton";
import DescriptionHeading from "../texts/DescriptionHeading";

function BookButton() {
  return (
    <QuoteButton
      disabled={true}
      style={{
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
      }}
    >
      <Book style={{ marginRight: 10 }} />
      <DescriptionHeading
        style={{
          color: "#FF5000",
        }}
      >
        Kitap
      </DescriptionHeading>
    </QuoteButton>
  );
}

export default BookButton;
