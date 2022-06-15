import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";
export default createTypo(
  // eslint-disable-next-line
  createStaticSimp(
    createSimpFrom(<p />),
    {
      fontSize: "var(--extra)",
      fontWeight: 400,
      margin: "var(--none)",
      letterSpacing: "1.5px",
    },
    "simp-p-subtitle"
  )
);
