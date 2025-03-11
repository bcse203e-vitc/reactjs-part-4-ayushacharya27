import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  
  const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear", price: "$15", description: "A book about building good habits.", available: true },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", price: "$12", description: "A philosophical novel about a shepherd.", available: false },
    { id: 3, title: "1984", author: "George Orwell", price: "$18", description: "A dystopian novel.", available: true },
  ];

  const book = books.find((b) => b.id === parseInt(id));
  const [cartStatus, setCartStatus] = useState(false);

  if (!book) return <h2>Book Not Found</h2>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Price: {book.price}</p>
      <p>Description: {book.description}</p>
      <p>Availability: {book.available ? "In Stock" : "Out of Stock"}</p>
      {book.available && (
        <button onClick={() => setCartStatus(true)} disabled={cartStatus}>
          {cartStatus ? "Added to Cart" : "Add to Cart"}
        </button>
      )}
      <br />
      <Link to="/">⬅ Back to Book List</Link>
    </div>
  );
};

export default BookDetails;
