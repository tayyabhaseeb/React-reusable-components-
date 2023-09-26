import React from "react";

export default function Testimonial({ children, heading }) {
  return (
    <div className="testimonial-cont">
      <div className="icon-cont">
        <i class="fa-solid fa-house-flag"></i>
        <h2>{heading}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
}
