import React, { useState, useContext } from "react";
import Platform from "./platform/platform";
import setGlobals from "./platform/setGlobals";
import {
  theme as defaultTheme,
  mutations as defaultMutations,
} from "./platform/theme";
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
  theme: appTheme,
  mutations,
  children,
  ...rest
}) {
  const [theme, setTheme] = useState(appTheme || {});
  const [appMutations, setAppMutations] = useState(mutations || {});
  const { colors = {} } = theme;

  const getColor = (def) => colors[def] || def;

  setGlobals({ ...defaultTheme, ...theme });

  const extendedMutations = Object.entries(defaultMutations).reduce(
    (acc, [key, value]) => {
      if (acc[key]) {
        return { ...acc, [key]: { ...value, ...acc[key] } };
      }
      return { ...acc, [key]: value };
    },
    { ...appMutations }
  );

  const contextValue = {
    theme,
    setTheme,
    mutations: extendedMutations,
    setMutations: setAppMutations,
    getColor,
  };

  const componnent = <Platform {...rest}>{children}</Platform>;

  return React.createElement(
    themeContext.Provider,
    { value: contextValue },
    componnent
  );
}
