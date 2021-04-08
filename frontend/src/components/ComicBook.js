import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function ComicBook({ comicbook }) {
  return (
    <Link
      to={`/comic/${comicbook.id}`}
      style={{ color: "white", textDecoration: "none" }}
    >
      <div className="card">
        <div className="card-front">
          <div className="card-body">
            <img
              className="card-img-top"
              src={comicbook.image}
              alt={comicbook.name}
            />
            <p className="card-header bg-danger row1">
              <b>{comicbook.name}</b>
            </p>
            <p className="card-footer">
              <b>₹ {comicbook.price}</b> <br />
              <Rating
                value={comicbook.rating}
                text={` ${comicbook.num_reviews} reviews`}
                classStyle=""
              />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
