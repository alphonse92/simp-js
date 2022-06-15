import { useLayoutEffect } from "react";
import PropTypes from "prop-types";

import { useStyleScope } from "./StyleScopeProvider";
import compileProps from "../compileProps";
import { useTheme } from "../../../simpTheme";

const Pseudo = function Pseudo({ name, ...props }) {
  const styleScopeContext = useStyleScope();
  const themeContext = useTheme();
  const { addClass, pseudoId } = styleScopeContext;
  const { compiled: styles } = compileProps(props, themeContext);

  useLayoutEffect(() => {
    if (pseudoId) {
      const ss = { name: `${pseudoId}${name}`, styles };
      addClass(ss);
    }
  }, [pseudoId, ...Object.values(styles)]);
};

Pseudo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Pseudo;
