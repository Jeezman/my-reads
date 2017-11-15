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
        <Route exact path="/search" render={() => <SearchBook />} />
        <Route exact path="/" render={() => <BookList books={books} />} />
      </div>
    );
  }
}

export default BooksApp;
