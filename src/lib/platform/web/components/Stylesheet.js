import React from "react";
import Style from "./Style";
import StylesheetFragment from "./StylesheetFragment";

export default function Stylesheet({ fragments, ...props }) {
  const fragmentsComponents = Object.entries(fragments).map(
    ([id, stylesheet]) => {
      return <StylesheetFragment key={id} stylesheet={stylesheet} />;
    }
  );

  return <Style>{fragmentsComponents}</Style>;
}
