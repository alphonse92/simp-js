export const mutations = {
  emphasis: {
    fontWeight: "400",
  },
  highEmphasis: {
    fontWeight: "600",
  },
};

export const theme = {
  // Override browser defaults: font, colors and background
  background: "var(--gooze)",
  color: "var(--sleepycloudFont)",
  font: "var(--lato)",
  // Template configurations
  // All variables will be setted as css prop
  // The Hierarchy structure is just to keep it organized
  fonts: {
    lato: "'Lato', 'sans-serif'",
    robotoMono: "'Roboto Mono', monospace",
  },
  fontSizes: {
    // these values will override the default typography sizes
    default: "1rem",
    small: "0.8rem",
    extra: "1.25rem",
    h1: "5rem",
    h2: "4rem",
    h3: "3rem",
    h4: "2.5rem",
    h5: "2rem",
    h6: "1.75rem",
  },
  spacing: {
    none: "none",
    xs: "0.5rem",
    s: "0.75rem",
    m: "1rem",
    l: "2rem",
    xl: "3rem",
  },
  colors: {
    // goose palette
    gooseLight: "#ffffff",
    gooze: "#F5F5F5",
    goozeDark: "#c2c2c2",

    //sleepycloud palette
    sleepycloud: "#e9f3fb",
    sleepycloudShadow: "#b1bfca",
    sleepycloudFont: "#14558b",
    sleepycloudEmphasis: "#375771",
  },
  // set here what you want
  globals: {},
};
