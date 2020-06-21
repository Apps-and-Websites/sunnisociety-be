const db = require("../dbConfig.js");

module.exports = {
  addBook,
  addAuthor,
  addAuthor,
};

async function addBook(book) {
  const [id] = await db("books")
    .insert({
      name: book.name,
      bookLink: book.bookLink,
      photoLink: book.photoLink,
      authorId: db("authors").select("id").where("name", book.author),
      translatorId: db("authors").select("id").where("name", book.translator),
      categoryId: db("categories").select("id").where("name", book.category),
      languageId: db("languages").select("id").where("name", book.language),
    })
    .returning("id");

  return getBookById(id);
}

async function addAuthor(newAuthor) {
  const [id] = await db("authors").insert(newAuthor).returning("id");

  return getAuthorById(id);
}

async function addAuthor(newAuthor) {
  const [id] = await db("authors").insert(newAuthor).returning("id");

  return getAuthorById(id);
}

// returning function internal only by id

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

function getAuthorById(id) {
  return db("authors").where({ id }).first();
}
