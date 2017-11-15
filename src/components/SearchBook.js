import React from "react";
import "../App.css";
import sortBy from "sort-by";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

class SearchBook extends React.Component {
  state = {
    query: "",
    searchedBooks: []
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };

  searchBooks = query => {
    this.setState({ query: query.trim() });
    BooksAPI.search(query.trim(), 20).then(_books => {
      const { books } = this.props;
      if (!_books || _books.error) {
        this.setState({ searchedBooks: [] });
      } else {
        _books.sort(sortBy("title"));
        for (let book of _books) {
          for (let myBook of books) {
            if (book.id === myBook.id) {
              book.shelf = myBook.shelf;
            } else {
              book.shelf = "none";
            }
          }
        }
        this.setState({ searchedBooks: _books });
      }
    });
  };
  render() {
    const { query, searchedBooks } = this.state;
    const { bookCategory, updateCategory } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              onChange={event => this.searchBooks(event.target.value)}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks &&
              searchedBooks.map(book => (
                <li key={book.id} className="book-list-item">
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
    );
  }
}

export default SearchBook;
