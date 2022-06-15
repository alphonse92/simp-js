import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";

export default createTypo(
  // eslint-disable-next-line
  createStaticSimp(
    createSimpFrom(<h4 />),
    {
      fontSize: "var(--h4)",
      fontWeight: 400,
      marginVertical: "var(--m)",
      letterSpacing: "1.5px",
    },
    "simp-h4"
  )
);
