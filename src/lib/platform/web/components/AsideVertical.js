import Aside from "./Aside";
import createStaticSimp from "../../../createStaticSimp";
export default createStaticSimp(
  Aside,
  {
    flexDirection: "column",
  },
  "simp-aside-vertical"
);
