import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router";
import SearchBook from "./components/SearchBook";
import BookList from "./components/BookList";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => <SearchBook />} />
        <Route exact path="/" render={() => <BookList />} />
      </div>
    );
  }
}

export default BooksApp;
