import React from "react";
import createSimpComponent from "./createSimpComponent";
export default function createSimpFrom(reactNode) {
  const { type } = reactNode;
  const Component = function SimpNode(props, ref) {
    return React.cloneElement(reactNode, { ...props, ref });
  };

  Component.displayName = `${type[0].toUpperCase()}${type.slice(
    1,
    type.length
  )}`;

  return createSimpComponent(React.forwardRef(Component));
}
