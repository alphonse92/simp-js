import React from "react";
import Vertical from "./Vertical";
import Horizontal from "./Horizontal";

export default function Center({ children }) {
  return (
    <Vertical center>
      <Horizontal center>{children}</Horizontal>
    </Vertical>
  );
}
