import React from "react";
import { Clapper } from "../Icons";
import QuoteButton from "../QuoteButton";
import DescriptionHeading from "../texts/DescriptionHeading";

function MovieButton() {
  return (
    <QuoteButton
      disabled={true}
      style={{
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 128,
      }}
    >
      <Clapper style={{ marginRight: 10 }} />
      <DescriptionHeading
        style={{
          color: "#FF5000",
        }}
      >
        Film / Dizi
      </DescriptionHeading>
    </QuoteButton>
  );
}

export default MovieButton;
