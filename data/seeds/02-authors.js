const authorData = require("./jsonFiles/authors.json");

console.log(`${authorData.length} authors are being inserted`);

const createAuthor = (author) => {
  return {
    name: author.name,
  };
};

exports.seed = async function (knex) {
  const authorContainer = [];

  authorData.map((author) => authorContainer.push(createAuthor(author)));
  await knex("authors").insert(authorContainer);
};
