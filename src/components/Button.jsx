import classNames from "classnames";
import React from "react";

export default function Button({ children, radius, color, className }) {
  const classShape = radius ? `btn-${radius}` : "";
  const colorClass = color ? `color-${color}` : "";

  const combineClass = classNames(classShape, colorClass, className);

  return <button className={combineClass}>{children}</button>;
}
