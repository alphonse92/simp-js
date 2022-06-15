import Article from "./Article";
import createStaticSimp from "../../../createStaticSimp";
export default createStaticSimp(
  Article,
  {
    flexDirection: "row",
  },
  "simp-article-horizontal"
);
