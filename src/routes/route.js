const express = require("express");
const router = express.Router();

let players = [
  {
    name: "abc",
    dob: "1/1/1991",
    gender: "male",
    city: "new delhi",
    sports: ["hockey"],
  },
  {
    name: "cde",
    dob: "1/1/1992",
    gender: "female",
    city: "pune",
    sports: ["cricket"],
  },
  {
    name: "efg",
    dob: "1/1/1993",
    gender: "male",
    city: "jalandhar",
    sports: ["rugby"],
  },
  {
    name: "ghi",
    dob: "1/1/1994",
    gender: "male",
    city: "mumbai",
    sports: ["hockey"],
  },
  {
    name: "ijk",
    dob: "1/1/1995",
    gender: "female",
    city: "delhi",
    sports: ["football"],
  },
];

router.post("/players", function (req, res) {
  let player = req.body;
  function newPlayers() {
    for (x = 0; x < players.length; x++) {
      let object = players[x];
      if (player.name == object.name) {
        return;
      } else if (player.name !== object.name && (x = players.length - 1)) {
        players.push(player);
      }
    }
  }
  newPlayers();
  res.send(players);
});

module.exports = router;
