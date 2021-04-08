import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import comicbooks from "../comicbooks";
import { comicbooksListAction } from "../actions/comicbookActions";

import Loader from "../components/Loader";
import ComicBook from "../components/ComicBook";

export default function HomePage() {
  const dispatch = useDispatch();
  const comicbookList = useSelector((state) => state.comicbookList);
  const { comicbooks, loading, error } = comicbookList;

  useEffect(() => {
    dispatch(comicbooksListAction());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center">Comics List</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3 className="text-center text-warning bg-secondary py-2">
          {error.name.toUpperCase()}: {error.message}
        </h3>
      ) : (
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
      )}
    </>
  );
}
