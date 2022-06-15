import Div from "./Div";
import createStaticSimp from "../../../createStaticSimp";

export default createStaticSimp(Div, {
  width: "100%",
  minHeight: "100%",
  bgColor: "var(--background)",
  overflow: "auto",
  display: "flex",
},
'simp-container-window',);
