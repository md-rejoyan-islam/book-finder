import { useState } from "react";
import booksData from "../data/booksList.json";
import ActionHeader from "./ActionHeader";
import BookGrid from "./BookGrid";

function getYear(data) {
  return Number(data.split("-")[0]);
}

export default function Main() {
  // copy books data list
  const copyBooks = booksData;
  const [books, setBooks] = useState([...booksData]);

  // book add to favorite
  const handleFavourite = (id) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) book.isFavourite = !book.isFavourite;
        return book;
      })
    );
  };

  // handle book soring
  const handleSort = (target) => {
    let copyBooks = [...books];

    // sort by name , order [ascending]
    if (target === "name_asc") {
      copyBooks.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    // sort by name , order [descending]
    else if (target === "name_desc") {
      copyBooks.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        } else if (a.name > b.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    // sort by year, order[asending]
    else if (target === "year_asc") {
      copyBooks.sort((a, b) => getYear(a.Published) - getYear(b.Published));
    }
    // sort by year, order[descending]
    else if (target === "year_desc") {
      copyBooks.sort((a, b) => getYear(b.Published) - getYear(a.Published));
    }
    // default value
    else {
      copyBooks = [...booksData];
    }

    // update state by new soring data
    setBooks(copyBooks);
  };

  // handle book search
  const handleSearch = (value) => {
    // if search value is empty show all books
    if (!value) setBooks(copyBooks);

    // return matched data and update state
    setBooks(
      copyBooks.filter((book) => {
        if (book.name.toLowerCase().includes(value.toLowerCase())) return book;
      })
    );
  };
  return (
    <main className="my-10 lg:my-14 px-4">
      <ActionHeader onHandleSort={handleSort} onHandleSearch={handleSearch} />

      {/* Book Grid */}
      <BookGrid
        books={books}
        getYear={getYear}
        onHandleFavourite={handleFavourite}
      />
    </main>
  );
}
