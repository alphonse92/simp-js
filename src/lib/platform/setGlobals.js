import webSetGlobals from "./web/setGlobals";

function def(theme) {
  throw new Error("not implemented yet");
}

let fn = def;

if (window) {
  fn = webSetGlobals;
}

export default fn;
