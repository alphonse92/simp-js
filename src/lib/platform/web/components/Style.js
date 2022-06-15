import React from "react";

export default function Style({ children, ...props }) {
  return (
    <style type="text/css" {...props}>
      {children}
    </style>
  );
}
