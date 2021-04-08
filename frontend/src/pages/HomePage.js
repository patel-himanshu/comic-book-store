import React, { useState, useEffect } from "react";
import axios from "axios";

// import comicbooks from "../comicbooks";
import ComicBook from "../components/ComicBook";

export default function HomePage() {
  const [comicbooks, setComicbooks] = useState([]);

  useEffect(() => {
    async function getComicBooks() {
      const response = await axios.get("/api/comicbooks/");
      setComicbooks(response.data);
    }

    getComicBooks();
  }, []);

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
