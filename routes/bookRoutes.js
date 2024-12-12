const express = require("express");
const {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/", createBook);
router.get("/", getBooks);
router.put("/:id", updateBook); // For updating a book
router.delete("/:id", deleteBook); // For deleting a book

module.exports = router;
