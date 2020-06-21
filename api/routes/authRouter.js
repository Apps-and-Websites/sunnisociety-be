const router = require("express").Router();

const db = require("../../data/models/authModel.js");

router.post("/book/", (req, res) => {
  const newBook = req.body;
  db.addBook(newBook)
    .then((savedBook) => {
      res.json(savedBook);
    })
    .catch((err) =>
      res.status(500).json({ message: "error adding book", err })
    );
});

router.post("/author/", (req, res) => {
  const newAuthor = req.body;
  db.addAuthor(newAuthor)
    .then((savedAuthor) => {
      res.json(savedAuthor);
    })
    .catch((err) =>
      res.status(500).json({ message: "error adding author", err })
    );
});

router.post("/category/", (req, res) => {
  const newCategory = req.body;
  db.addAuthor(newAuthor)
    .then((savedAuthor) => {
      res.json(savedAuthor);
    })
    .catch((err) =>
      res.status(500).json({ message: "error adding author", err })
    );
});

module.exports = router;
