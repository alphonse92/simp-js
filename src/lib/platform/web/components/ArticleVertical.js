import Article from "./Article";
import createStaticSimp from "../../../createStaticSimp";
export default createStaticSimp(
  Article,
  {
    flexDirection: "column",
  },
  "simp-article-vertical"
);
