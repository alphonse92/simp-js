import * as webTheme from "./web/theme";

let obj = {};

if (window) {
  obj = webTheme;
}

export const { theme, mutations } = obj;
