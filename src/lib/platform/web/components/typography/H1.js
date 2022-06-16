import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";

export default createTypo(
  createStaticSimp(
    // eslint-disable-next-line
    createSimpFrom(<h1 />),
    {
      text: true,
      title: true,
      h1: true,
    },
    "simp-h1"
  )
);
