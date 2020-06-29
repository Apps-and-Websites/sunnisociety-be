const router = require("express").Router();
const bcrypt = require("bcryptjs");

const UserTbl = require("../../data/models/userModel.js");
const getToken = require("./getToken.js");

router.get("/", (req, res) => {
  UserTbl.getAllUser()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: "error adding new users", err });
    });
});

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  UserTbl.addUser(user)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((err) => {
      res.status(500).json({ message: "error adding new users", err });
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("users loginng in: ", req.body);
  UserTbl.findBy({ username })
    .then((user) => {
      console.log("after loging in then: ", user);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}`,
          token: token,
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "exception", err });
    });
});

module.exports = router;
