import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProgress from "../components/CheckoutProgress";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";

export default function ShippingPage({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);
  const [pinCode, setPinCode] = useState(shippingAddress.pinCode);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, country, pinCode }));
    history.push("/payment");
  };

  return (
    <>
      <FormContainer>
        <CheckoutProgress step1 step2 />
        <h1 className="text-center">Shipping</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Address:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your address"
              value={address ? address : ""}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></input>
          </div>

          <div className="form-group">
            <label>City:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your city"
              value={city ? city : ""}
              onChange={(e) => setCity(e.target.value)}
              required
            ></input>
          </div>

          <div className="form-group">
            <label>Country:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your country"
              value={country ? country : ""}
              onChange={(e) => setCountry(e.target.value)}
              required
            ></input>
          </div>

          <div className="form-group">
            <label>Pin Code:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your PIN Code"
              value={pinCode ? pinCode : ""}
              onChange={(e) => setPinCode(e.target.value)}
              required
            ></input>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn-primary btn-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
      </FormContainer>
    </>
  );
}
