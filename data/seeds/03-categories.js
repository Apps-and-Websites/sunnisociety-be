const categoryData = require("./jsonFiles/categories.json");

console.log(`${categoryData.length} categories are being inserted`);

const createCategory = (category) => {
  return {
    name: category.name,
  };
};

exports.seed = async function (knex) {
  const categoryContainer = [];

  categoryData.map((category) =>
    categoryContainer.push(createCategory(category))
  );
  await knex("categories").insert(categoryContainer);
};
