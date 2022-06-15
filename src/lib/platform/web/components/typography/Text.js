import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";
export default createTypo(
  // eslint-disable-next-line
  createStaticSimp(
    createSimpFrom(<p />),
    {
      fontSize: "var(--default)",
      marginVertical: "var(--m)",
    },
    "simp-p"
  )
);
