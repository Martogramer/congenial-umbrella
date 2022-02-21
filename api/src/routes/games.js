const axios = require("axios");
const { getAllInfo } = require("../ctrl/get.controllers");
const { Router } = require("express");
const { URL_GAMES, URL_SEARCH } = require("../globals/globals");
const { Genres } = require("../models/Genres");
const { Videogame } = require("../models/Videogame");

const router = Router();




const getByName = async (req, res, next) => {
  const {name} = req.query;
  const allGames = await getAllInfo();


  try {
    if (!name) {
      return res.status(200).send(allGames);
      next()
    } else {      
      const game = allGames.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase()));
      game.lenght
      ? res.status(200).json(game.slice())
      : res.status(404).send("No Se Encontraron Resultados");
    }
  } catch (err) {
    return err;
  }


  /* const games = axios.get(`https://api.rawg.io/api/games?key=6d62af1479864f0cae7616fd7e10a7d2&search=${name}`).then((e)=>{
    return e.data.results
  })
  const gamesDb= await Videogame.findAll({
    include: Genres,
    where: {
      name: {
        [Op.iLike]: "%" + name + "%"
      }
    } 
  }) */  
};
router.get('/', getByName);


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
  const {id} = req.params;
  const allGames = await getAllInfo()
  if(id) {
    const gamesId = await allGames.filter(a=>a.id == id)
    gamesId.lenght ?
    res.status(200).json(gamesId) :
    res.status(400).send('No Se Encontro El Id')
  }
}
router.get("/:id", getById);


module.exports = router;
