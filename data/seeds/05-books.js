const bookData = require("./jsonFiles/books.json");

console.log(`${bookData.length} books are being inserted`);

const createbook = (book) => {
  return {
    name: book.name,
    bookLink: book.bookLink,
    photoLink: book.photoLink,
    categoryId: book.categoryId,
    authorId: book.authorId,
    translatorId: book.translatorId,
    languageId: book.languageId,
  };
};

exports.seed = async function (knex) {
  const booksContainer = [];

  bookData.map((book) => booksContainer.push(createbook(book)));
  await knex("books").insert(booksContainer);
};
