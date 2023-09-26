import React from "react";

export default function Subheading({ children, ...rest }) {
  return (
    <div>
      <h2 {...rest} style={{ fontFamily: "Permanent Marker" }}>
        {children}
      </h2>
    </div>
  );
}
