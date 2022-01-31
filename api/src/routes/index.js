const { Router } = require("express");
const { express } = require("express");

const gamesRoute = require('./games');

const router = Router();

router.use("/games", gamesRoute);


module.exports = router;
