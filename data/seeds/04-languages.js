const languageData = require("./jsonFiles/languages.json");

console.log(`${languageData.length} languages are being inserted`);

const createLanguage = (language) => {
  return {
    name: language.name,
  };
};

exports.seed = async function (knex) {
  const languageContainer = [];

  languageData.map((language) =>
    languageContainer.push(createLanguage(language))
  );
  await knex("languages").insert(languageContainer);
};
