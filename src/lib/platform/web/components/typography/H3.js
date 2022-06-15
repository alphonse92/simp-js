import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";
export default createTypo(
  // eslint-disable-next-line
  createStaticSimp(
    createSimpFrom(<h3 />),
    {
      fontSize: "var(--h3)",
      fontWeight: 300,
      marginVertical: "var(--m)",
      letterSpacing: "1.5px",
    },
    "simp-h3"
  )
);
