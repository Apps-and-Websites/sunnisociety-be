const userData = require("./jsonFiles/users.json");

console.log(`${userData.length} users are being inserted`);

const createUser = (user) => {
  return {
    username: user.username,
    password: user.password,
  };
};

exports.seed = async function (knex) {
  const userContainer = [];

  userData.map((user) => userContainer.push(createUser(user)));
  await knex("users").insert(userContainer);
};
