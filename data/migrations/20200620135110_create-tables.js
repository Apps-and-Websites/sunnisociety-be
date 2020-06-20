exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
    })
    .createTable("authors", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("categories", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("languages", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("books", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
      tbl.string("bookLink", 128).notNullable().unique();
      tbl.string("photoLink", 128).notNullable().unique();
      tbl
        .integer("authorId")
        .notNullable()
        .unsigned()
        .references("authors.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("translatorId")
        .unsigned()
        .references("authors.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("categoryId")
        .unsigned()
        .references("categories.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("languageId")
        .unsigned()
        .references("languages.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("books")
    .dropTableIfExists("categories")
    .dropTableIfExists("authors")
    .dropTableIfExists("languages")
    .dropTableIfExists("users");
};
