import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";
export default createTypo(
  // eslint-disable-next-line
  createStaticSimp(createSimpFrom(<h5 />), {
    fontSize: "var(--h5)",
    fontWeight: 700,
    marginVertical: "var(--m)",
    letterSpacing: "1.5px",
  },
  'simp-h5',)
);
