import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";
export default createTypo(
  // eslint-disable-next-line
  createStaticSimp(
    createSimpFrom(<h6 />),
    {
      fontSize: "var(--h6)",
      fontWeight: 900,
      marginVertical: "var(--m)",
      letterSpacing: "1.5px",
    },
    "simp-h6"
  )
);
