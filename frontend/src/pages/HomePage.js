import React from "react";
import ComicBook from "../components/ComicBook";
import comicbooks from "../comicbooks";

export default function HomePage() {
  return (
    <>
      {/* <div className="row"> */}
      <h1 className="text-center">Comics List</h1>
      <div className="row text-center">
        {comicbooks.map((comicbook) => {
          return (
            <div
              key={comicbook.id}
              className="col-xl-3 col-lg-4 col-md-6 col-xs-12 d-inline-block my-2"
            >
              <ComicBook comicbook={comicbook} />
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
}
