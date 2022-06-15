import React from "react";
import createSimpFrom from "../../lib/createSimpFrom";
import createStaticSimp from "../../lib/createStaticSimp";

// Example of the creation of a Custom simp component

const ImageSimp =
  // Then, create a component with defined styles
  createStaticSimp(
    // This will create a simp component from a React node
    // eslint-disable-next-line
    createSimpFrom(<img />),
    // the defined styles
    {
      width: "100%",
    },
    "image"
  );

export default function Image(props) {
  return <ImageSimp {...props} />;
}
