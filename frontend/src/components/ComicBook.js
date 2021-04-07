import React from "react";

export default function ComicBook({ comicbook }) {
  return (
    <div className="card">
      <div className="card-front">
        <div className="card-body">
          <img
            className="card-img-top"
            src={comicbook.image}
            alt={comicbook.name}
          />
          <p className="card-header row1">
            <b>{comicbook.name}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
