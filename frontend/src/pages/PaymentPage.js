import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProgress from "../components/CheckoutProgress";
import FormContainer from "../components/FormContainer";
import { savePaymentMode } from "../actions/cartActions";

export default function PaymentPage({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [paymentMode, setPaymentMode] = useState("PayPal");

  if (!shippingAddress.address) {
    history.push("/shipping");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMode(paymentMode));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutProgress step1 step2 step3 />
      <h1 className="text-center">Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Mode of Payment:</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMode"
              id="paypal"
              onChange={(e) => setPaymentMode(e.target.value)}
              checked
            />
            <label className="form-check-label" htmlFor="paypal">
              PayPal
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMode"
              id="cashOnDelivery"
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            <label className="form-check-label" htmlFor="cashOnDelivery">
              Cash on Delivery
            </label>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn-primary btn-lg" type="submit">
            Continue
          </button>
        </div>
      </form>
    </FormContainer>
  );
}
