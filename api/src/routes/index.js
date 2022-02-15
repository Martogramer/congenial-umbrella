const { Router } = require("express");
const getByName = require('./games');
const getByGenres = require('./games');
const postGames = require('./games');
const getById = require('./games');
const router = Router();

router.use("/games", getByName);
//router.use("/games?name=", getByName)
router.use("/genres", getByGenres)
router.use("/post", postGames)
router.use("/games/:id", getById)

module.exports = router;
