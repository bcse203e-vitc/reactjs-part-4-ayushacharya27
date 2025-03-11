import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear", price: "$15" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", price: "$12" },
    { id: 3, title: "1984", author: "George Orwell", price: "$18" },
  ]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]); // Correct state update
  };

  return (
    <div>
      <h1>📚 Online Bookstore</h1>
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook addBook={addBook} />} />
      </Routes>
    </div>
  );
};

export default App;
