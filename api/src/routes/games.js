const { getAllInfo } = require("../ctrl/get.controllers");
const { Router } = require("express");

const router = Router();

const getByName = async (req, res) => {
  const name = req.query.name;
  const allGames = await getAllInfo();

  try {
    if (!name) {
      return res.status(200).send(allGames);
    } else {
      const game = allGames.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      game.lenght
        ? res.status(200).json(game)
        : res.status(404).send("No Se Encontraron Resultados");
    }
  } catch (err) {
    return error;
  }
};
router.get("/", getByName);

module.exports = router;
