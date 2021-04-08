import React from "react";

export default function Loader() {
  return (
    <div
      className="spinner-border text-info d-block"
      role="status"
      style={{ height: "50px", width: "50px", margin: "auto" }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
