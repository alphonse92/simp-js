import React, { useState, useContext } from "react";
import Platform from "./platform/platform";
import setGlobals from "./platform/setGlobals";
import defaultTheme from "./platform/theme";
export const themeContext = React.createContext(null);
export const useTheme = function useTheme() {
  const context = useContext(themeContext);

  const { theme, mutations, getColor, setTheme, setMutations } = context;
  return {
    theme,
    setTheme,
    mutations,
    setMutations,
    getColor,
  };
};

export default function ThemeProvider({
  theme: defTheme,
  mutations: defMutations,
  children,
  ...rest
}) {
  const [theme, setTheme] = useState(defTheme || {});
  const [mutations, setMutations] = useState(defMutations || {});

  const { colors = {} } = theme;

  const getColor = (def) => colors[def] || def;

  setGlobals({ ...defaultTheme, ...theme });

  const contextValue = {
    theme,
    setTheme,
    mutations,
    setMutations,
    getColor,
  };

  const componnent = <Platform {...rest}>{children}</Platform>;

  return React.createElement(
    themeContext.Provider,
    { value: contextValue },
    componnent
  );
}
