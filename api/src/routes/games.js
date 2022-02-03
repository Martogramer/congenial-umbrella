const { getAllInfo } = require("../ctrl/get.controllers");
const { Router } = require("express");
const { URL_GAMES } = require("../globals/globals");
const axios = require("axios");
const { Genres } = require("../models/Genres");
const { Videogame } = require("../models/Videogame");

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
    return err;
  }
};
router.get("/", getByName);


const getByGenres = async (req, res) => {
  const genresUrl = await axios.get(URL_GAMES);
  const genres = genresUrl.data.results.map(a=>a.genres);
  const genresEach = genres.map(a=>{
    for(let i=0; i<a.length; i++) return a[i]
  })
  genresEach.forEach(a=>{
    Genres.findOrCreate({
      where: {name: a}
    })
  })
  const allGenres = await Genres.findAll();
  res.send(allGenres);
} 
router.get("/", getByGenres);


const postGames = async (req, res) => {
  let {
    name,
    released,
    rating,
    description,
    background_image,
    genres
  } = req.body;
  const gameInDb = await Videogame.create ({
    name,
    released,
    rating,
    description,
    background_image,
    createInDb
  })
  let genresDb = await Genres.findAll({
    where: {name: genres}
  })
  gameInDb.addGenres(genresDb)
}
router.post("/", postGames);

const getById = async (req, res) => {
  const id = req.params.id;
  const allGames = await getAllInfo()
  if(id) {
    const gamesId = await allGames.filter(a=>a.id == id)
    gamesId.lenght ?
    res.status(200).json(gamesId) :
    res.status(400).send('No Se Encontro El Id')
  }
}
router.get("/", getById);


module.exports = router;
