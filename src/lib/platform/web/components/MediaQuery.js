import { useLayoutEffect } from "react";
import PropTypes from "prop-types";

import { useStyleScope } from "./StyleScopeProvider";
import compileProps from "../compileProps";
import { useTheme } from "../../../simpTheme";

const MediaQuery = function MediaQuery({ query, ...props }) {
  const styleScopeContext = useStyleScope();
  const themeContext = useTheme();
  const { pseudoId, addMediaQuery } = styleScopeContext;
  const { compiled: styles } = compileProps(props, themeContext);

  useLayoutEffect(() => {
    if (pseudoId) {
      const ss = { query, styles };
      addMediaQuery(ss);
    }
  }, [pseudoId, ...Object.values(styles)]);
};

MediaQuery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default MediaQuery;
