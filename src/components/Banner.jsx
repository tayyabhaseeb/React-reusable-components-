import React from "react";
import classNames from "classnames";

export default function Banner({ children, message, avat, className }) {
  const messageClass = avat ? `cont-${avat}` : "";

  const globalClass = classNames(messageClass, className);
  const iconClass =
    avat === "Congrasulations"
      ? "fa-solid fa-circle-check"
      : avat === "Problem"
      ? "fa-sharp fa-solid fa-circle-xmark"
      : avat === "Attention"
      ? "fa-solid fa-triangle-exclamation"
      : avat === "Update"
      ? "fa-solid fa-file-pen"
      : "";

  return (
    <div className={globalClass}>
      <div className="head">
        <i class={iconClass}></i>
        <h3>{message}</h3>
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}
