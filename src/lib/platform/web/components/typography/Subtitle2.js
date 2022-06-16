import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";
export default createTypo(
  // eslint-disable-next-line
  createStaticSimp(
    createSimpFrom(<p />),
    {
      text: true,
      subtitle: true,
      subtitle2: true,
    },
    "simp-p-subtitle2"
  )
);
