// const fetch = require("node-fetch");
// const fs = require("fs");

// fetch("https://dj-helper-be.herokuapp.com/api/djs")
//   .then((res) => res.json())
//   .then((data) => {
//     const songs = JSON.stringify(data, null, 2);
//     fs.writeFileSync("djs.json", songs, (err) => console.log(err));
//   });

// fetch("https://dj-helper-be.herokuapp.com/api/events")
//   .then((res) => res.json())
//   .then((data) => {
//     const events = JSON.stringify(data, null, 2);
//     fs.writeFileSync("events.json", events, (err) => console.log(err));
//   });

// fetch("https://dj-helper-be.herokuapp.com/api/playlists")
//   .then((res) => res.json())
//   .then((data) => {
//     const playlists = JSON.stringify(data, null, 2);
//     fs.writeFileSync("playlists.json", playlists, (err) => console.log(err));
//   });
