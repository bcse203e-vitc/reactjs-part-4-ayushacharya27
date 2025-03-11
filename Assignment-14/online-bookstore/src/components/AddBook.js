import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation to prevent empty submissions
    if (!title.trim() || !author.trim() || !price.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    const newBook = {
      id: Date.now(), // Unique ID
      title,
      author,
      price: `$${price}`,
    };

    addBook(newBook); // Call parent function to update state

    // Reset form fields
    setTitle("");
    setAuthor("");
    setPrice("");

    // Navigate back to homepage
    navigate("/");
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
