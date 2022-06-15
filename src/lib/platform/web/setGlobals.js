export default function webSetGlobals(theme = {}) {
  const root = document.querySelector(":root");

  const {
    color,
    font,
    background,
    colors = {},
    spacing = {},
    globals = {},
    fontSizes = {},
    fonts = {},
  } = theme;

  const all = {
    color,
    font,
    background,
    ...colors,
    ...spacing,
    ...globals,
    ...fontSizes,
    ...fonts,
  };

  Object.entries(all).forEach(([key, val]) => {
    if (val) {
      root.style.setProperty(`--${key}`, val);
    }
  });

  if (font) {
    document.body.style.fontFamily = font;
  }

  if (color) {
    document.body.style.color = color;
  }
}
