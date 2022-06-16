import React from "react";
import createSimpFrom from "../../../../createSimpFrom";
import createStaticSimp from "../../../../createStaticSimp";
import createTypo from "./createTypo";
export default createTypo(
  // eslint-disable-next-line
  createStaticSimp(createSimpFrom(<h5 />), {
    text: true,
    title: true,
    h5: true,
    
    
  },
  'simp-h5',)
);
