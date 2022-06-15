import platformWeb from "./web/platform";

let Platform;

if (window) {
  Platform = platformWeb;
}

export default Platform;
