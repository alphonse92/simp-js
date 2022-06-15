import compilePropsWeb from "./web/compileProps";

let fn;

if (window) {
  fn = compilePropsWeb;
}

export default fn;
