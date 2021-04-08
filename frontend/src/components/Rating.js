import React from "react";

export default function Rating({ value, text, classStyle }) {
  return (
    <span className={classStyle}>
      <i
        className={
          value >= 1
            ? "fa fa-star"
            : value >= 0.5
            ? "fa fa-star-half-o"
            : "fa fa-star"
        }
        style={{ color: "yellow" }}
      ></i>
      <i
        className={
          value >= 2
            ? "fa fa-star"
            : value >= 1.5
            ? "fa fa-star-half-o"
            : "fa fa-star"
        }
        style={{ color: "yellow" }}
      ></i>
      <i
        className={
          value >= 3
            ? "fa fa-star"
            : value >= 2.5
            ? "fa fa-star-half-o"
            : "fa fa-star"
        }
        style={{ color: "yellow" }}
      ></i>
      <i
        className={
          value >= 4
            ? "fa fa-star"
            : value >= 3.5
            ? "fa fa-star-half-o"
            : "fa fa-star"
        }
        style={{ color: "yellow" }}
      ></i>
      <i
        className={
          value >= 5
            ? "fa fa-star"
            : value >= 4.5
            ? "fa fa-star-half-o"
            : "fa fa-star"
        }
        style={{ color: "yellow" }}
      ></i>
      {text}
    </span>
  );
}
