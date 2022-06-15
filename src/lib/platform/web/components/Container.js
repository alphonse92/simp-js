import React from "react";
import Div from "./Div";
import createStaticSimp from "../../../createStaticSimp";

const BaseContainerComponent = createStaticSimp(
  Div,
  {
    display: "flex",
  },
  "simp-container-base"
);

export default function Container({
  flex,
  center,
  vertical,
  horizontal,
  size,
  ...rest
}) {
  const containerProps = {};

  if (flex) {
    containerProps.flex = 1;
  }

  if (center) {
    containerProps.justifyContent = "center";
  }

  if (horizontal) {
    containerProps.flexDirection = "row";
  }

  if (vertical) {
    containerProps.flexDirection = "column";
  }

  if (size) {
    containerProps.width = size;
    containerProps.height = size;
  }

  return <BaseContainerComponent {...containerProps} {...rest} />;
}
