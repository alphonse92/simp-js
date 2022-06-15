import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";
export default createTypo(
  // eslint-disable-next-line
  createStaticSimp(createSimpFrom(<h2 />), {
    fontSize: "var(--h2)",
    fontWeight: 300,
    marginVertical: "var(--m)",
    letterSpacing: "1.5px",
  },
  'simp-h2',)
);
