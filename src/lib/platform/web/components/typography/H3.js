import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";
export default createTypo(
  // eslint-disable-next-line
  createStaticSimp(
    createSimpFrom(<h3 />),
    {
      text: true,
      title: true,
      h3: true,
     
    },
    "simp-h3"
  )
);
