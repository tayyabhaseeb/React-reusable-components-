import React from "react";

export default function Heading({ children, ...rest }) {
  return (
    <div {...rest} className="header">
      <h1>{children}</h1>
    </div>
  );
}
