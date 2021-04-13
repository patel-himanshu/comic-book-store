import React from "react";

export default function FormContainer({ children }) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xs-12">{children}</div>
      </div>
    </div>
  );
}
