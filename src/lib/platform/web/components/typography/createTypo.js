import React from "react";
import { useTheme } from "../../../../simpTheme";
export default function createTypo(Component) {
  return function SimpTypo({ font, size, ...props }) {
    const { theme = {} } = useTheme();
    const { fonts = {} } = theme;
    const selectedFont = fonts[font];

    const extraProps = { ...props };
    if (selectedFont) {
      extraProps.fontStyle = selectedFont;
    }

    if (size) {
      extraProps.fontSize = size;
    }

    return <Component {...extraProps} />;
  };
}
