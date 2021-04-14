import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckoutProgress from "../components/CheckoutProgress";

export default function PlaceOrderPage() {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  const subtotal = cartItems
    .reduce((acc, currItem) => acc + currItem.quantity * currItem.price, 0)
    .toFixed(2);
  const taxPrice = (subtotal * 0.18).toFixed(2);
  const shippingPrice = (subtotal > 500 ? 0 : 50).toFixed(2);
  const totalPrice = (
    Number(subtotal) +
    Number(taxPrice) +
    Number(shippingPrice)
  ).toFixed(2);

  const onPlaceOrder = () => {};

  return (
    <div>
      <CheckoutProgress step1 step2 step3 step4 />
      <div className="row">
        <div className="col-md-8">
          <div className="list-group-flush">
            <div className="list-group-item">
              <h3>Shipping Info</h3>
              <p>
                <strong>Address: </strong>
                {shippingAddress.address}, {shippingAddress.city},{" "}
                {shippingAddress.country}, {shippingAddress.pinCode}
              </p>
            </div>
            <div className="list-group-item">
              <h3>Payment Mode</h3>
              <p>{cart.paymentMode}</p>
            </div>
            <div className="list-group-item">
              <h3>Order Items</h3>
              {cartItems.length === 0 ? (
                <p className="text-info">Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <li key={item.id} className="list-group-item">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-2 text-left">
                        <img
                          className="container-fluid"
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                      <div className="col d-flex align-items-center text-left">
                        <Link
                          to={`/comics/${item.id}`}
                          style={{ color: "yellow" }}
                        >
                          <b>{item.name}</b>
                        </Link>
                      </div>
                      <div
                        className="col-md-4 d-flex align-items-center"
                        style={{ color: "lightgreen" }}
                      >
                        ₹ {(item.price * item.quantity).toFixed(2)} ={" "}
                        {item.quantity} x ₹ {item.price}
                      </div>
                    </div>
                  </li>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="list-group-flush">
            <li className="list-group-item">
              <h3 className="mb-3">Order Summary</h3>
              <div className="row">
                <div className="col">Total Items:</div>
                <p className="col text-right">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </p>
              </div>
              <div className="row">
                <div className="col">Subtotal: </div>
                <p className="col text-right">₹ {subtotal}</p>
              </div>
              <div className="row">
                <div className="col">Shipping Charges: </div>
                <p className="col text-right">₹ {shippingPrice}</p>
              </div>
              <div className="row">
                <div className="col">Taxes: </div>
                <p className="col text-right">₹ {taxPrice}</p>
              </div>
              <h4 className="row">
                <div className="col">Total: </div>
                <div className="col text-right">₹ {totalPrice}</div>
              </h4>
            </li>
            <li className="list-group-item text-center">
              <button
                className="btn btn-success"
                disabled={cartItems.length === 0}
                onClick={onPlaceOrder}
              >
                <h4>Place Order</h4>
              </button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
