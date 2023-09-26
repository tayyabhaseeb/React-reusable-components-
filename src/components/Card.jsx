import React from "react";
import classNames from "classnames";

export default function Card({ children, heading, avatar }) {
  const styles = {
    color: avatar === "deployed" ? "blue" : "red",
  };

  let iconClass =
    avatar === "deployed"
      ? "fa-solid fa-cloud-arrow-up fa-beat-fade"
      : "fa-solid fa-upload fa-beat-fade";
  return (
    <div className="card-cont">
      <i className={iconClass} style={styles}></i>
      <h2>{heading}</h2>
      <p>{children}</p>
    </div>
  );
}
