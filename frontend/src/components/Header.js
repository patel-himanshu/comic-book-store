import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark sticky-top pb-2 mb-4">
      <div className="container-fluid">
        <Link to="/">
          <div className="navbar-brand">Comic Book Store</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMobile"
          // style={{ border: "1px solid grey" }}
          onClick={navCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarMobile"
        >
          <ul className="navbar-nav nav-pills ml-auto">
            <Link to="/cart">
              <li className="nav-item text-right mt-1 mx-1">
                <div className="nav-link px-2 text-right">
                  <i className="fa fa-shopping-cart"> Cart</i>
                </div>
              </li>
            </Link>
            {userInfo ? (
              <>
                <Link to="/profile">
                  <li className="nav-item text-right mt-1 mx-1">
                    <div className="nav-link px-2 text-right">
                      <i className="fa fa-user"> Profile</i>
                    </div>
                  </li>
                </Link>
                <li
                  className="nav-item text-right mt-1 mx-1"
                  onClick={handleLogout}
                >
                  <div className="nav-link px-2 text-right">
                    <i className="fa fa-sign-out"> Logout</i>
                  </div>
                </li>
              </>
            ) : (
              <Link to="/login">
                <li className="nav-item text-right mt-1 mx-1">
                  <div className="nav-link px-2 text-right">
                    <i className="fa fa-user"> Login</i>
                  </div>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
