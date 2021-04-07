import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm sticky-top pb-2 mb-4">
      <div className="container-fluid">
        <div className="navbar-brand">Comic Book Store</div>
        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMobile"
          style={{ border: "1px solid black" }}
          onClick={navCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarMobile"
        >
          <ul className="navbar-nav nav-pills ml-auto">
            <li className="nav-item text-right mt-1 mx-1">
              <div className="nav-link px-2 text-right">
                <i className="fa fa-shopping-cart"> Cart</i>
              </div>
            </li>
            <li className="nav-item text-right mt-1 mx-1">
              <div className="nav-link px-2 text-right">
                <i className="fa fa-user"> Login</i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
