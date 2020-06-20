const jwt = require("jsonwebtoken");

const Secrets = require("./secrets.js");

function getToken(user) {
  const payload = {
    userid: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: "2h",
  };

  const token = jwt.sign(payload, Secrets.jwtSecret, options);

  return token;
}

module.exports = getToken;
