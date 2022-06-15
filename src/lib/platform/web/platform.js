import React from "react";
import StylesheetProvider from "./components/StyleProvider";

export default function Platform(props) {
  const { children, ...rest } = props;

  return <StylesheetProvider {...rest}>{children}</StylesheetProvider>;
}
