export const mutations = {
  // overriding title mutations
  title: {
    fontFamily: "var(--fontTitles)",
    marginVertical: "var(--none)",
  },
  subtitle: {
    fontFamily: "var(--fontTitles)",
  },
  // New mutations
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
  // All variables will be setted as css variables
  // The Hierarchy structure is just to keep it organized
  fonts: {
    fontRegular: "'Lato', 'sans-serif'",
    fontTitles: "'Roboto Slab', serif",
  },
  fontSizes: {
    // these values will override the default typography sizes
    default: "16px",
    small: "14px",
    extra: "20px",
    h1: "86px",
    h2: "60px",
    h3: "48px",
    h4: "34px",
    h5: "24px",
    h6: "20px",
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
    sleepycloud: "#ebf0f6",
    sleepycloudShadow: "#3f3d56",
    sleepycloudFont: "#2f2e41",
    sleepycloudEmphasis: "#2f2e41",

    // redstone palette

    redstone: "#ff6584",
    redstoneEmphasis: "#de1c43",
  },
  // set here what you want
  globals: {},
};
