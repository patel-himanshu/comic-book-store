import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getProfileDetails, updateProfile } from "../actions/userActions";
import { USER_PROFILE_UPDATE_RESET } from "../actions/types";

export default function ProfilePage({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const userProfileDetails = useSelector((state) => state.userProfileDetails);
  const { user, loading, error } = userProfileDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userProfileUpdate = useSelector((state) => state.userProfileUpdate);
  const { success } = userProfileUpdate;

  useEffect(() => {
    if (!user) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_PROFILE_UPDATE_RESET });
        dispatch(getProfileDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateProfile({
          id: user.id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage("");
    }
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <h2>User Profile</h2>
        {error && (
          <h3 className="text-center text-info">
            {error}
            <br />
            <Link to="/">Return back to home</Link>
          </h3>
        )}
        {message && <h3 className="text-center text-warning">{message}</h3>}
        {loading && <Loader />}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>

          <div className="form-group">
            <label>E-Mail Address:</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              className="form-control"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            ></input>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-9">
        <h2>My Orders</h2>
      </div>
    </div>
  );
}
