import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} - {book.price}
            <Link to={`/book/${book.id}`}> View Details </Link>
          </li>
        ))}
      </ul>
      <Link to="/add-book">
        <button>Add New Book</button>
      </Link>
    </div>
  );
};

export default BookList;
