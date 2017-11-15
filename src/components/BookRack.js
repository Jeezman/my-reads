import React from "react";
import Book from "./Book";
import "../App.css";

class BookRack extends React.Component {
  render() {
    const { title, books, bookCategory, updateCategory } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    bookCategory={bookCategory}
                    updateCategory={updateCategory}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookRack;
