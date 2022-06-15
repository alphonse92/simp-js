import React from "react";
import StyleScopeProvider from "./platform/web/components/StyleScopeProvider";
export default function createStaticSimp(Component, staticProps = {}, name) {

  if (!name) {
    throw new Error("Static simp component Name is required");
  }

  return function StaticSimp(props) {
    return (
      <StyleScopeProvider
        sspId={`ssp-static-${name}`}
        sspStatic={staticProps}
        Component={Component}
        {...props}
      ></StyleScopeProvider>
    );
  };
}
