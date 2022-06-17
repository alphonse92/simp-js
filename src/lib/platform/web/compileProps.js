const camelCaseToSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter, idx, word) => {
    if (idx === 0) {
      return letter.toLowerCase();
    }
    return `-${letter.toLowerCase()}`;
  });

const assign = (styleObj, propName, propValue) => {
  if (propValue) {
    styleObj[camelCaseToSnakeCase(propName)] = propValue;
  }
};

const multipleConfigurationInline = (value) => (value ? `${value}` : undefined);

const getDisplay = (props) => {
  const {
    display,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
  } = props;

  const flexArr = [
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
  ];

  if (flexArr.some(Boolean)) {
    return "flex";
  }
  return display;
};

export default function compileProps(props, { mutations, getColor }) {
  let mutatedProps = { ...props };

  Object.entries(mutatedProps).forEach(([key, val]) => {
    if (mutations[key] && typeof mutations[key] === "object") {
      mutatedProps = { ...mutatedProps, ...mutations[key] };
      delete mutatedProps[key];
    }
  });

  const {
    content,
    // layout
    zIndex,
    opacity,
    position,
    display,
    top,
    left,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    overflow,
    aspectRatio,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,

    // spacing
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginHorizontal,
    marginVertical,

    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingHorizontal,
    paddingVertical,

    // background
    bg,
    bgColor,
    bgImage,
    bgRepeat,
    bgAttachment,
    bgPosition,
    bgSize,

    // border
    border,
    borderStyle,
    borderTopStyle,
    borderBottomStyle,
    borderLeftStyle,
    borderRightStyle,
    borderColor,
    borderTopColor,
    borderBottomColor,
    borderLeftColor,
    borderRightColor,
    borderWidth,
    borderTopWidth,
    borderBottomWidth,
    borderRightWidth,
    borderLeftWidth,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopRadius,
    borderBottomRadius,

    // typo
    color,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign,
    textDecoration,
    textShadow,

    textTransform,

    style,
    ...rest
  } = mutatedProps;

  const layoutStyles = {};

  assign(layoutStyles, "content", content);
  assign(layoutStyles, "display", getDisplay(mutatedProps));
  assign(layoutStyles, "opacity", opacity);
  assign(layoutStyles, "position", position);
  assign(layoutStyles, "zIndex", zIndex);
  assign(layoutStyles, "top", top);
  assign(layoutStyles, "left", left);
  assign(layoutStyles, "width", width);
  assign(layoutStyles, "height", height);
  assign(layoutStyles, "minWidth", minWidth);
  assign(layoutStyles, "maxWidth", maxWidth);
  assign(layoutStyles, "minHeight", minHeight);
  assign(layoutStyles, "maxHeight", maxHeight);
  assign(layoutStyles, "overflow", overflow);
  assign(layoutStyles, "aspectRatio", aspectRatio);
  assign(layoutStyles, "alignContent", alignContent);
  assign(layoutStyles, "alignItems", alignItems);
  assign(layoutStyles, "alignSelf", alignSelf);
  assign(layoutStyles, "justifyContent", justifyContent);
  assign(layoutStyles, "flex", flex);
  assign(layoutStyles, "flexBasis", flexBasis);
  assign(layoutStyles, "flexDirection", flexDirection);
  assign(layoutStyles, "flexGrow", flexGrow);
  assign(layoutStyles, "flexShrink", flexShrink);
  assign(layoutStyles, "flexWrap", flexWrap);

  const spacingStyles = {};

  assign(spacingStyles, "margin", multipleConfigurationInline(margin));
  assign(
    spacingStyles,
    "marginTop",
    marginVertical ? marginVertical : marginTop
  );
  assign(
    spacingStyles,
    "marginBottom",
    marginVertical ? marginVertical : marginBottom
  );
  assign(
    spacingStyles,
    "marginLeft",
    marginHorizontal ? marginHorizontal : marginLeft
  );
  assign(
    spacingStyles,
    "marginRight",
    marginHorizontal ? marginHorizontal : marginRight
  );
  assign(spacingStyles, "padding", multipleConfigurationInline(padding));
  assign(
    spacingStyles,
    "paddingTop",
    paddingVertical ? paddingVertical : paddingTop
  );
  assign(
    spacingStyles,
    "paddingBottom",
    paddingVertical ? paddingVertical : paddingBottom
  );
  assign(
    spacingStyles,
    "paddingLeft",
    paddingHorizontal ? paddingHorizontal : paddingLeft
  );
  assign(
    spacingStyles,
    "paddingRight",
    paddingHorizontal ? paddingHorizontal : paddingRight
  );

  const borderStyles = {};

  assign(borderStyles, "border", multipleConfigurationInline(border));
  assign(borderStyles, "borderStyle", borderStyle);
  assign(borderStyles, "borderTopStyle", borderTopStyle);
  assign(borderStyles, "borderBottomStyle", borderBottomStyle);
  assign(borderStyles, "borderLeftStyle", borderLeftStyle);
  assign(borderStyles, "borderRightStyle", borderRightStyle);
  assign(borderStyles, "borderColor", getColor(borderColor));
  assign(borderStyles, "borderTopColor", getColor(borderTopColor));
  assign(borderStyles, "borderBottomColor", getColor(borderBottomColor));
  assign(borderStyles, "borderLeftColor", getColor(borderLeftColor));
  assign(borderStyles, "borderRightColor", getColor(borderRightColor));
  assign(borderStyles, "borderWidth", borderWidth);
  assign(borderStyles, "borderTopWidth", borderTopWidth);
  assign(borderStyles, "borderBottomWidth", borderBottomWidth);
  assign(borderStyles, "borderRightWidth", borderRightWidth);
  assign(borderStyles, "borderLeftWidth", borderLeftWidth);
  assign(borderStyles, "borderRadius", borderRadius);
  assign(
    borderStyles,
    "borderTopLeftRadius",
    borderTopRadius ? borderTopRadius : borderTopLeftRadius
  );
  assign(
    borderStyles,
    "borderTopRightRadius",
    borderTopRadius ? borderTopRadius : borderTopRightRadius
  );
  assign(
    borderStyles,
    "borderBottomLeftRadius",
    borderBottomRadius ? borderBottomRadius : borderBottomLeftRadius
  );
  assign(
    borderStyles,
    "borderBottomRightRadius",
    borderBottomRadius ? borderBottomRadius : borderBottomRightRadius
  );

  const bgStyles = {};
  assign(bgStyles, "background", bg);
  assign(bgStyles, "backgroundColor", getColor(bgColor));
  assign(bgStyles, "backgroundSize", bgSize);
  assign(bgStyles, "backgroundImage", bgImage ? `url(${bgImage})` : undefined);
  assign(bgStyles, "backgroundRepeat", bgRepeat);
  assign(bgStyles, "backgroundAttachment", bgAttachment);
  assign(bgStyles, "backgroundPosition", bgPosition);

  const typoStyles = {};
  assign(typoStyles, "fontFamily", fontFamily);
  assign(typoStyles, "fontSize", fontSize);
  assign(typoStyles, "fontStyle", fontStyle);
  assign(typoStyles, "fontWeight", fontWeight);
  assign(typoStyles, "letterSpacing", letterSpacing);
  assign(typoStyles, "lineHeight", lineHeight);
  assign(typoStyles, "textAlign", textAlign);
  assign(typoStyles, "textDecoration", textDecoration);
  assign(typoStyles, "textShadow", textShadow);
  assign(typoStyles, "textTransform", textTransform);
  assign(typoStyles, "color", getColor(color));

  const allStyles = {
    ...layoutStyles,
    ...spacingStyles,
    ...borderStyles,
    ...bgStyles,
    ...typoStyles,
    ...style,
  };

  return { compiled: allStyles, rest };
}
