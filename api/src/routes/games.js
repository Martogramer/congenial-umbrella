const axios = require("axios");
const { getAllInfo } = require("../ctrl/get.controllers");
const { Router } = require("express");
const { Op } = require('sequelize')
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
        const game=await allGames.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase()));
        game.length
        ? res.status(200).send(game())
        : res.status(404).send("No Se Encontraron Resultados");
      }
    } catch (err) {
      return err;
    }





/*   let gamesApi
  let gamesDb
    if(name){
      gamesApi=axios.get(`https://api.rawg.io/api/games?key=6d62af1479864f0cae7616fd7e10a7d2&search=${name}`).then((a)=>{return a.data.results})
      gamesDb= await Videogame.findAll({
        include: Genres,
        where: {
          name: {
            [Op.iLike]: "%" + name + "%"
          }
        },
        order: [
          ['name', 'ASC']
        ]
      })
    } else {
      gamesApi = allGames();
      gamesDb = await Videogame.findAll({
        include: Genres
      })
    }
  Promise.all([
    gamesApi,
    gamesDb
  ])
  .then((a)=>{
    const [gamesApi, gamesDb] = a
    let filterGames=gamesApi.map((a)=>{
      return {
        id: a.id,
        name: a.name,
        background_image: a.background_image,
        released: a.released,
        ratings: ar.ratings.map(a=>a),
        platforms: ar.platforms.map(a=>a),
        genres: ar.genres.map(a=>a)
      }
    })
    let VIDEOGAMES=[...filterGames, ...gamesDb]
    res.send(VIDEOGAMES)
  }) .catch((error)=> next(error)) */



  
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




const getById = async (req, res, next) => {

try{
  const {id}=req.params
  let games
  let data=[]
  if(typeof id ==='string' && id.length > 8){
    let response = await Videogame.findOne({
      include: Genres,
      where: {
        id: id
      }
    })
    games = response.dataValues
  } else {
    let response = await axios.get(`https://api.rawg.io/api/games/${id}?key=6d62af1479864f0cae7616fd7e10a7d2`)
    const entries= Object.entries(response.data)
    data.push(Object.fromEntries(entries))

    const gamesData=data.map((game)=>{
      return {
        id: game.id,
        name: game.name,
        description: game.description,
        released: game.released,
        background_image: game.background_image,
        rating: game.rating,
        platforms: game.platforms.map(p=>p.platforms.name).join(', '),
        genres: game.genres.map((a)=>a.name).join(', ')
      }
    })
    games = gamesData[0]
  }
  res.send(games)
} catch (error){next(error)}

/*   const {id} = req.params;
  const allGames = await getAllInfo()
  if(id) {
    const gamesId = await allGames.filter(a=>a.id == id)
    gamesId.lenght ?
    res.status(200).json(gamesId) :
    res.status(400).send('No Se Encontro El Id')
  } */

}
router.get("/:id", getById);


module.exports = router;
