import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, removeFromCartAction } from "../actions/cartActions";

export default function CartPage({ match, location, history }) {
  const comicbookId = match.params.id;
  const quantity = location.search
    ? parseInt(location.search.split("=")[1], 10)
    : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (comicbookId) {
      dispatch(addToCartAction(comicbookId, quantity));
    }
  }, [dispatch, comicbookId, quantity]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCartAction(id));
  };

  const handleCheckout = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <h3 className="text-center text-info">
          You do not have any comics in your cart. <br />
          <Link to="/">Return back to home</Link>
        </h3>
      ) : (
        <>
          <div className="row">
            <div className="col-md-8">
              <h1 className="mb-3">Your Shopping Cart</h1>
              <ul className="list-group text-center">
                {cartItems.map((item) => (
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
                        className="col-md-2 d-flex align-items-center"
                        style={{ color: "lightgreen" }}
                      >
                        ₹ {item.price}
                      </div>
                      <div className="col-md-2 text-right d-flex align-items-center ">
                        <select
                          className="form-control"
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              addToCartAction(item.id, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.stock).keys()].map((elem) => (
                            <option key={elem + 1} value={elem + 1}>
                              {elem + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button
                        className="col-md-1 btn bg-danger"
                        style={{ height: "3rem" }}
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <i
                          className="fa fa-times"
                          style={{ fontSize: "1.5rem" }}
                        ></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-4">
              <h1 className="mb-3">Summary</h1>
              <div className="list-group">
                <li className="list-group-item">
                  <h4 className="row">
                    <div className="col">Total Items:</div>
                    <div className="col text-right">
                      {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                    </div>
                  </h4>
                </li>
                <li className="list-group-item">
                  <h4 className="row">
                    <div className="col">Subtotal: </div>
                    <div className="col text-right">
                      ₹{" "}
                      {cartItems
                        .reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </div>
                  </h4>
                </li>
                <li className="list-group-item text-center">
                  <button
                    className="btn btn-success"
                    // disabled={cartItems.length === 0}
                    onClick={handleCheckout}
                  >
                    <h4>Proceed to Checkout</h4>
                  </button>
                </li>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
