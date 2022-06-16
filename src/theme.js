export const mutations = {
  // overriding title mutations
  title: {
    fontFamily: "var(--fontTitles)",
    marginVertical: "var(--none)",
  },
  emphasis: {
    fontWeight: "400",
    color: "var(--sleepycloudEmphasis)",
  },
  highEmphasis: {
    fontWeight: "600",
    color: "var(--sleepycloudEmphasis)",
  },
};

export const theme = {
  // Override browser defaults: font, colors and background
  background: "var(--gooze)",
  color: "var(--sleepycloudFont)",
  font: "var(--fontRegular)",
  // Template configurations
  // All variables will be setted as css prop
  // The Hierarchy structure is just to keep it organized
  fonts: {
    fontRegular: "'Lato', 'sans-serif'",
    fontTitles: "'Roboto Slab', serif",
  },
  fontSizes: {
    // these values will override the default typography sizes
    default: "1.25rem",
    small: "0.8rem",
    extra: "1.5rem",
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
    sleepycloudFont: "#004278",
    sleepycloudEmphasis: "#000c51",
  },
  // set here what you want
  globals: {},
};
