import React from "react";
import "../App.css";

class Book extends React.Component {
  render() {
    const { book, bookCategory, updateCategory } = this.props;
    let shelf = bookCategory(book.id);
    console.log("inside book", shelf);
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={e => updateCategory(book, e.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    );
  }
}

export default Book;
