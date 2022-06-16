export const theme = {
  color: "black",
  background: "gray",
  font: "var(--lato)",
  fonts: {
    lato: "'Lato', 'sans-serif'",
  },
  fontSizes: {
    default: "1rem",
    small: "0.8rem",
    extra: "1.25rem",
    h1: "6rem",
    h2: "5rem",
    h3: "4rem",
    h4: "3rem",
    h5: "2.5rem",
    h6: "2rem",
  },
  spacing: {
    none: "none",
    xs: "0.5rem",
    s: "0.75rem",
    m: "1rem",
    l: "2rem",
    xl: "rem",
  },
  colors: {},
};

export const mutations = {
  title: {
    marginVertical: "var(--m)",
  },
  subtitle: {
    margin: "var(--none)",
  },
  h1: {
    fontSize: "var(--h1)",
    fontWeight: 400,
  },
  h2: {
    fontSize: "var(--h2)",
    fontWeight: 400,
  },
  h3: {
    fontSize: "var(--h3)",
    fontWeight: 400,
  },
  h4: {
    fontSize: "var(--h4)",
    fontWeight: 400,
  },
  h5: {
    fontSize: "var(--h5)",
    fontWeight: 700,
  },
  h6: {
    fontSize: "var(--h6)",
    fontWeight: 900,
  },
  small: {
    fontSize: "var(--small)",
  },
  subtitle1: {
    fontSize: "var(--default)",
    fontWeight: 300,
  },
  subtitle2: {
    fontSize: "var(--extra)",
    fontWeight: 400,
  },
};
