import React, { useState, useLayoutEffect, useContext } from "react";
import { useTheme } from "../../../simpTheme";
import compileProps from "../compileProps";
import { useStylesheet } from "./StyleProvider";

export const providerContext = React.createContext(null);
export function useStyleScope() {
  const context = useContext(providerContext);

  if (!context) return null;

  const { pseudoId, className, addClass, addMediaQuery } = context;

  return {
    pseudoId,
    className,
    addClass,
    addMediaQuery,
  };
}

export default function StyleScopeProvider(props) {
  const { addStylesheet, getNextId } = useStylesheet();
  const themeContext = useTheme();
  const {
    Component,
    sspId: idDef,
    sspStatic,
    className: classNameDef,
    // extract all
    ...rest
  } = props;

  const [styleContextId, setStyleContextId] = useState(idDef);

  useLayoutEffect(() => {
    if (!idDef) {
      setStyleContextId(`ssp-${getNextId()}`);
      return;
    }

    if (sspStatic && idDef) {
      const { compiled: styles } = compileProps(sspStatic, themeContext);
      addClass({ name: idDef, styles });
      return;
    }
  }, [idDef, sspStatic, getNextId]);

  const stylesToCss = (styles) => {
    const entries = Object.entries(styles);

    if (!entries.length) return null;

    const css = entries.reduce(
      (str, [key, value]) => str + `${key}:${value};`,
      ""
    );

    return css;
  };

  const addClass = ({ name, styles }) => {
    if (!styleContextId) return;

    const css = stylesToCss(styles);

    if (css === null) return;

    addStylesheet((snapshot) => ({
      ...snapshot,
      [styleContextId]: {
        ...(snapshot[styleContextId] || {}),
        [`.${name}`]: css,
      },
    }));
  };

  const addMediaQuery = ({ id = styleContextId, query, styles }) => {
    if (!styleContextId) return;

    const css = stylesToCss(styles);

    if (css === null) return;

    addStylesheet((snapshot) => ({
      ...snapshot,
      [styleContextId]: {
        ...(snapshot[styleContextId] || {}),
        mediaQueries: {
          ...(snapshot?.[styleContextId]?.mediaQueries || {}),
          [`${query}`]: {
            [`.${id}`]: css,
          },
        },
      },
    }));
  };

  const contextValue = {
    pseudoId: styleContextId,
    className: styleContextId,
    addClass,
    addMediaQuery,
  };

  const className = `${classNameDef ? classNameDef : ""} ${styleContextId}`;

  return (
    <providerContext.Provider value={contextValue}>
      <Component className={className} {...rest} />
    </providerContext.Provider>
  );
}
