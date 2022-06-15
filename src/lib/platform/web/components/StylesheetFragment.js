import React from "react";
import StyleClass from "./StyleClass";

const stylesheetToComponents = (stylesheet) =>
  Object.entries(stylesheet).map(([cls, css]) => (
    <StyleClass key={cls} name={cls} css={css} />
  ));

const MediaQueries = ({ query, stylesheet, children, ...props }) => {
  const mediaQuerieStylesheet = stylesheetToComponents(stylesheet);
  return (
    <>
      {query}
      {"{"}
      {mediaQuerieStylesheet}
      {"}"}
    </>
  );
};

export default function StylesheetFragment({ id, stylesheet: stylesheetDef }) {
  const { mediaQueries = {}, ...stylesheet } = stylesheetDef;
  const cssComponents = stylesheetToComponents(stylesheet);
  const mediaQueriesComponents = Object.entries(mediaQueries).map(
    ([query, stylesheet]) => (
      <MediaQueries key={query} query={query} stylesheet={stylesheet} />
    )
  );

  return (
    <>
      {cssComponents}
      {mediaQueriesComponents}
    </>
  );
}
