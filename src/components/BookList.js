import React from "react";
import "../App.css";
import BookRack from "./BookRack";
import { Link } from "react-router-dom";

class BookList extends React.Component {
  render() {
    const { books, bookCategory, updateCategory } = this.props;
    const book_rack = [
      {
        id: 1,
        title: "Currently Reading",
        books: books.filter(book => book.shelf === "currentlyReading")
      },
      {
        id: 2,
        title: "Want to Read",
        books: books.filter(book => book.shelf === "wantToRead")
      },
      {
        id: 3,
        title: "Read",
        books: books.filter(book => book.shelf === "read")
      }
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {book_rack.map(value => (
            <BookRack
              key={value.id}
              books={value.books}
              title={value.title}
              bookCategory={bookCategory}
              updateCategory={updateCategory}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookList;
