const db = require("../dbConfig.js");

module.exports = {
  getAllUser,
  getUserById,
  addUser,
  findBy,
};

function getAllUser() {
  return db("users");
}

function getUserById(id) {
  return db("users").where({ id }).first();
}

async function addUser(user) {
  const [id] = await db("users").insert(user).returning("id");
  return getUserById(id);
}

function findBy(filter) {
  return db("users").where(filter).first();
}
