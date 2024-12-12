// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const BookList = ({ onEdit, onDelete }) => {
//   const [books, setBooks] = useState([]);

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/books");
//       setBooks(response.data);
//     } catch (err) {
//       console.error("Error fetching books:", err);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   return (
//     <div className="p-5">
//       <h2 className="text-xl mb-4">Books List</h2>
//       <ul>
//         {books.map((book) => (
//           <li key={book._id} className="border-b py-2">
//             <h3 className="font-bold">{book.title}</h3>
//             <p>{book.author}</p>
//             <p>
//               {book.genre} | {book.year}
//             </p>
//             <button
//               onClick={() => onEdit(book)} // Call onEdit with the selected book
//               className="bg-blue-500 text-white p-2 rounded mr-2"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => onDelete(book._id)} // Call onDelete with the book id
//               className="bg-red-500 text-white p-2 rounded"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const BookList = ({ onEdit, onDelete }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5000/api/books");
      setBooks(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching books:", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p className="text-xl mb-4">No books in the collection</p>
        <p>Add a book to get started!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Book Collection
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {book.title}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Author:</span> {book.author}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{book.genre}</span>
                <span className="font-medium">{book.year}</span>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => onEdit(book)}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-md 
                    hover:bg-blue-600 transition-colors duration-300 
                    flex items-center justify-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path
                      fillRule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => onDelete(book._id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded-md 
                    hover:bg-red-600 transition-colors duration-300 
                    flex items-center justify-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
