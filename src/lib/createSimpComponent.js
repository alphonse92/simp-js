import React, { useLayoutEffect } from "react";
import compileProps from "./platform/compileProps";
import StyleScopeProvider, {
  useStyleScope,
} from "./platform/web/components/StyleScopeProvider";
import { useTheme } from "./simpTheme";

export default function createSimpComponent(Component) {
  function SimpedComponent({ innerRef, pseudo = [], queries = [], ...props }) {
    const themeContext = useTheme();
    const { pseudoId, addClass } = useStyleScope();
    const { compiled: allStyles, rest } = compileProps(props, themeContext);

    useLayoutEffect(() => {
      if (pseudoId) {
        const ss = { name: pseudoId, styles: allStyles };
        addClass(ss);
      }
    }, [pseudoId, ...Object.values(allStyles)]);

    const pseudoElements = !Array.isArray(pseudo) ? [pseudo] : pseudo;
    const queryElements = !Array.isArray(queries) ? [queries] : queries;

    const component = (
      <>
        {pseudoElements.map((el, key) =>
          React.cloneElement(el, { key: el.props?.name || key })
        )}
        {queryElements.map((el, key) =>
          React.cloneElement(el, { key: el.props?.name || key })
        )}
        <Component ref={innerRef} {...rest} />
      </>
    );
    return component;
  }

  return function SimpComponent({ ...props }) {
    return <StyleScopeProvider Component={SimpedComponent} {...props} />;
  };
}
