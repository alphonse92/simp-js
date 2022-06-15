import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";

export default createTypo(
  createStaticSimp(
    // eslint-disable-next-line
    createSimpFrom(<h1 />),
    {
      fontSize: "var(--h1)",
      fontWeight: 300,
      marginVertical: "var(--m)",
      letterSpacing: "1.5px",
    },
    "simp-h1"
  )
);
