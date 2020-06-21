const db = require("../dbConfig.js");

module.exports = {
  getAllBooks,
  getBookById,
  getAllAuthors,
  getAuthorById,
  getAllCategories,
  getCategoryById,
};

function getAllBooks() {
  return db("books as b")
    .leftOuterJoin("authors as a", function () {
      this.on("b.authorId", "a.id");
    })
    .leftOuterJoin("authors as aa", function () {
      this.on("b.translatorId", "aa.id");
    })
    .join("categories as c", "c.id", "b.categoryId")
    .join("languages as l", "l.id", "b.languageId")
    .select(
      "b.id",
      "b.name",
      "b.bookLink",
      "b.photoLink",
      "a.name as author",
      "aa.name as translator",
      "c.name as category",
      "l.name as language"
    );
}

function getBookById(id) {
  return db("books as b")
    .leftOuterJoin("authors as a", function () {
      this.on("b.authorId", "a.id");
    })
    .leftOuterJoin("authors as aa", function () {
      this.on("b.translatorId", "aa.id");
    })
    .join("categories as c", "c.id", "b.categoryId")
    .join("languages as l", "l.id", "b.languageId")
    .select(
      "b.id",
      "b.name",
      "b.bookLink",
      "b.photoLink",
      "a.name as author",
      "aa.name as translator",
      "c.name as category",
      "l.name as language"
    )
    .where("b.id", id)
    .first();
}

function getAllAuthors() {
  return db("authors");
}

function getAuthorById(id) {
  return db("authors").where({ id }).first();
}

function getAllCategories() {
  return db("categories");
}

function getCategoryById(id) {
  return db("categories").where({ id }).first();
}
