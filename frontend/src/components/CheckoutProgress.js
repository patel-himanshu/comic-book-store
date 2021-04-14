import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutProgress({ step1, step2, step3, step4 }) {
  return (
    <ul
      className="container nav-pills d-flex justify-content-center mb-3"
      style={{ listStyleType: "none" }}
    >
      <li className="nav-item">
        {step1 ? (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        ) : (
          <Link className="nav-link disabled" to="/login">
            Login
          </Link>
        )}
      </li>

      <li className="nav-item">
        {step2 ? (
          <Link className="nav-link" to="/shipping">
            Shipping
          </Link>
        ) : (
          <Link className="nav-link disabled" to="/shipping">
            Shipping
          </Link>
        )}
      </li>

      <li className="nav-item">
        {step3 ? (
          <Link className="nav-link" to="/payment">
            Payment
          </Link>
        ) : (
          <Link className="nav-link disabled" to="/payment">
            Payment
          </Link>
        )}
      </li>

      <li className="nav-item">
        {step4 ? (
          <Link className="nav-link" to="/placeorder">
            Order
          </Link>
        ) : (
          <Link className="nav-link disabled" to="/placeorder">
            Order
          </Link>
        )}
      </li>
    </ul>
  );
}
