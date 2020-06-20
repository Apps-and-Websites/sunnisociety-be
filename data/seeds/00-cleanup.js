const cleaner = require("knex-cleaner");

exports.seed = async function (knex) {
  // await knex('locations').truncate();
  await knex.raw(
    "TRUNCATE TABLE books,categories,languages, authors, users CASCADE"
  );

  // return cleaner.clean(knex, {
  //   mode: 'truncate',
  //   ignoreTables: ['knex_migrations', 'knex_migrations_lock']
  // });
};
