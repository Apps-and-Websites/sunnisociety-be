const router = require("express").Router();

const db = require("../../data/models/publicModel");

router.get("/books", (req, res) => {
  db.getAllBooks()
    .then((books) => {
      res.json(books);
    })
    .catch((err) =>
      res.status(500).json({ message: "error getting books", err })
    );
});

router.get("/book/:id", (req, res) => {
  const { id } = req.params;

  db.getBookById(id)
    .then((book) => {
      res.json(book);
    })
    .catch((err) =>
      res.status(500).json({ message: "error getting the requested book", err })
    );
});

router.get("/authors", (req, res) => {
  db.getAllAuthors()
    .then((authors) => {
      res.json(authors);
    })
    .catch((err) =>
      res.status(500).json({ message: "error getting authors", err })
    );
});

router.get("/author/:id", (req, res) => {
  const { id } = req.params;

  db.getAuthorById(id)
    .then((author) => {
      res.json(author);
    })
    .catch((err) =>
      res.status(500).json({ message: "error getting single author", err })
    );
});

module.exports = router;
