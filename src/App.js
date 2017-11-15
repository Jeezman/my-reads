import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router";
import SearchBook from "./components/SearchBook";
import BookList from "./components/BookList";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  handleCategory = bookID => {
    let { books } = this.state;
    let book = books.find(value => {
      return value.id === bookID;
    });
    if (book) {
      return book.shelf;
    } else {
      return "none";
    }
  };

  handleUpdateBookRack = (book, rack) => {
    let { books } = this.state;
    BooksAPI.update(book, rack)
      .then(shelves => {
        let updatedBook = books.find(book => {
          return book.id === book.id;
        });
        if (!updatedBook) {
          book.shelf = rack;
          books.push(book);
        } else {
          updatedBook.shelf = rack;
        }
        this.setState(state => ({
          books: books
        }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState(state => ({
        ...state,
        books
      }))
    );
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => <SearchBook books={books} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              bookCategory={this.handleCategory}
              updateCategory={this.handleUpdateBookRack}
              books={books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
