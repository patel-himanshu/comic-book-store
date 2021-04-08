import React from "react";
import comicbooks from "../comicbooks";
import Rating from "../components/Rating";

export default function ComicPage(props) {
  const comic = comicbooks.find(
    (comicbook) => comicbook.id === parseInt(props.match.params.id)
  );

  return (
    <div>
      <h1 className="text-center mb-2">{comic.name}</h1>
      <div className="row">
        <div className="col-md-4 my-1">
          <img className="img-fluid" src={comic.image} alt={comic.name} />
        </div>

        <div className="col-md-5 my-1">
          <ul className="list-group list-group-flush">
            <Rating
              value={comic.rating}
              text={` ${comic.numReviews} reviews`}
              classStyle="list-group-item"
            />
            <li className="list-group-item text-justify">
              <b>Creators</b>: {comic.creators}
            </li>
            <li className="list-group-item">
              <b>Publisher</b>: {comic.publisher}
            </li>
            <li className="list-group-item">
              <b>Pages</b>: {comic.printLength}
            </li>
            <li className="list-group-item text-justify">
              <i>{comic.description}</i>
            </li>
          </ul>
        </div>

        <div className="col-md-3 my-1">
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item">
              <b>Price</b>: {comic.price}
            </li>
            <li className="list-group-item">
              <b>Status</b>: {comic.stock > 0 ? "In Stock" : "Out of Stock"}
            </li>
            <li className="list-group-item">
              <b>Quantity</b>: 0
            </li>
            <li className="list-group-item">
              <button className="btn btn-primary" disabled={comic.stock === 0}>
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
