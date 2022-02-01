const { Router } = require("express");
const gamesRoute = require('./games');

const router = Router();

router.use("/games", gamesRoute);
router.use("/games?name=", gamesRoute)

module.exports = router;
