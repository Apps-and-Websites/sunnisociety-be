require("dotenv").config();
const server = require("./api/server.js");
const port = process.env.PORT || 3300;

server.listen(port, () => {
  console.log(`**listening on port ${port}`);
});
