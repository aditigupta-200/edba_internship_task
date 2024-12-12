
import React, { useState, useEffect } from "react";
import axios from "axios";

const BookForm = ({ currentBook, onFormSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  // When currentBook is provided (i.e., editing), prefill the form fields
  useEffect(() => {
    if (currentBook) {
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
      setGenre(currentBook.genre);
      setYear(currentBook.year);
    }
  }, [currentBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (currentBook) {
        // Update existing book
        await axios.put(`http://localhost:5000/api/books/${currentBook._id}`, {
          title,
          author,
          genre,
          year,
        });
        alert("Book updated successfully");
      } else {
        // Create a new book
        await axios.post("http://localhost:5000/api/books", {
          title,
          author,
          genre,
          year,
        });
        alert("Book added successfully");
      }
      onFormSubmit(); // Reset form after submit
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {currentBook ? "Update Book" : "Add a New Book"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              transition duration-200 ease-in-out"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              transition duration-200 ease-in-out"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              transition duration-200 ease-in-out"
            placeholder="Enter book genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Publication Year
          </label>
          <input
            type="number"
            required
            min="1000"
            max="2024"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              transition duration-200 ease-in-out"
            placeholder="Enter publication year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md 
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
            transition duration-200 ease-in-out transform active:scale-95"
        >
          {currentBook ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
