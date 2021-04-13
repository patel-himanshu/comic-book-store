import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

export default function LoginPage({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userLogin, userInfo, redirect]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <FormContainer>
        {error && (
          <h3 className="text-center text-info">
            {error}
            <br />
            <Link to="/">Return back to home</Link>
          </h3>
        )}
        {loading && <Loader />}
        <h1 className="text-center">Sign In</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>E-Mail Address:</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            ></input>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn-primary" type="submit">
              Sign In
            </button>
          </div>
        </form>

        <div className="row py-2">
          <div className="col">
            New Customer?{" "}
            <Link
              to={redirect ? `/redirect?register=${redirect}` : "/register"}
            >
              Register Here
            </Link>
            .
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
