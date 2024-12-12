// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useNavigate,
// } from "react-router-dom";
// import BookForm from "./components/BookForm";
// import BookList from "./components/BookList";
// import Login from "./components/Login"; // Assuming you have a Login component

// const App = () => {
//   const [currentBook, setCurrentBook] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const navigate = useNavigate(); // This should work as it is inside Router

//   // Token authentication check
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login"); // Use navigate inside Router context
//     }
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 shadow-lg">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <h1 className="text-3xl font-extrabold tracking-tight">
//             Book Management System
//           </h1>
//           <button
//             onClick={() => setIsFormVisible(!isFormVisible)}
//             className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition-colors duration-300 flex items-center space-x-2"
//           >
//             {isFormVisible ? (
//               <>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span>Close</span>
//               </>
//             ) : (
//               <>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span>Add Book</span>
//               </>
//             )}
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         <Routes>
//           <Route
//             path="/book-management"
//             element={
//               <div
//                 className={`transition-all duration-500 ease-in-out transform ${
//                   isFormVisible
//                     ? "opacity-100 translate-y-0 mb-8"
//                     : "opacity-0 -translate-y-4 h-0 overflow-hidden"
//                 }`}
//               >
//                 <BookForm
//                   currentBook={currentBook}
//                   onFormSubmit={() => setIsFormVisible(false)}
//                 />
//                 <BookList />
//               </div>
//             }
//           />
//           <Route path="/login" element={<Login />} />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-4 mt-8">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-sm">
//             © {new Date().getFullYear()} Book Management System. All rights
//             reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {
  const [currentBook, setCurrentBook] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to handle edit action
  const handleEdit = (book) => {
    setCurrentBook(book);
    setIsFormVisible(true);
  };

  // Function to handle delete action
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      alert("Book deleted successfully");
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  // Function to reset the form after submission
  const handleFormSubmit = () => {
    setCurrentBook(null);
    setIsFormVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Book Management System
          </h1>
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold
            hover:bg-blue-100 transition-colors duration-300 flex items-center space-x-2"
          >
            {isFormVisible ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Close</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Add Book</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Animated Form Slide */}
        <div
          className={`transition-all duration-500 ease-in-out transform
          ${
            isFormVisible
              ? "opacity-100 translate-y-0 mb-8"
              : "opacity-0 -translate-y-4 h-0 overflow-hidden"
          }`}
        >
          <BookForm currentBook={currentBook} onFormSubmit={handleFormSubmit} />
        </div>

        {/* Book List */}
        <BookList onEdit={handleEdit} onDelete={handleDelete} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Book Management System. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
