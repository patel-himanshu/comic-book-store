import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import comicbooks from "../comicbooks";
import { comicbookItemAction } from "../actions/comicbookActions";
import Loader from "../components/Loader";
import Rating from "../components/Rating";

export default function ComicPage(props) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const comicbookItem = useSelector((state) => state.comicbookItem);
  const { comicbook: comic, loading, error } = comicbookItem;

  useEffect(() => {
    dispatch(comicbookItemAction(props.match.params.id));
  }, [dispatch, props]);

  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?quantity=${quantity}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3 className="text-center text-warning bg-secondary py-2">
          {error.name.toUpperCase()}: {error.message}
        </h3>
      ) : (
        <>
          <h1 className="text-center mb-2">{comic.name}</h1>
          <div className="row">
            <div className="col-md-4 my-1">
              <img className="img-fluid" src={comic.image} alt={comic.name} />
            </div>

            <div className="col-md-5 my-1">
              <ul className="list-group list-group-flush">
                <Rating
                  value={comic.rating}
                  text={` ${comic.num_reviews} reviews`}
                  classStyle="list-group-item"
                />
                <li className="list-group-item">
                  <b>Price</b>: ₹ {comic.price}
                </li>
                <li className="list-group-item text-justify">
                  <b>Creators</b>: {comic.creators}
                </li>
                <li className="list-group-item">
                  <b>Publisher</b>: {comic.publisher}
                </li>
                <li className="list-group-item">
                  <b>Pages</b>: {comic.print_length}
                </li>
                <li className="list-group-item text-justify">
                  <i>{comic.description}</i>
                </li>
              </ul>
            </div>

            <div className="col-md-3 my-1">
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col text-left">
                      <b>Status</b>:
                    </div>
                    <div className="col text-right">
                      {comic.stock > 0 ? "In Stock" : "Out of Stock"}
                    </div>
                  </div>
                </li>
                {comic.stock > 0 && (
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col text-left">
                        <b>Quantity</b>:
                      </div>
                      <div className="col text-right">
                        <select
                          className="form-control"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        >
                          {[...Array(comic.stock).keys()].map((elem) => (
                            <option key={elem + 1} value={elem + 1}>
                              {elem + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </li>
                )}
                <li className="list-group-item">
                  <div className="row">
                    <div className="col text-left">
                      <b>Total Price</b>:
                    </div>
                    <div className="col text-right">₹ {comic.price}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <button
                    className="btn btn-primary"
                    disabled={comic.stock === 0}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
