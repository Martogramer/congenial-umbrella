const axios = require('axios')
const { API_KEY } = process.env;
const {Videogame, Genres} = require('../db')

const getApiInfo = async ()=> {
    
    let cero = axios.get(`https://api.rawg.io/api/games?key=6d62af1479864f0cae7616fd7e10a7d2&page=1`)
    let uno = axios.get(`https://api.rawg.io/api/games?key=6d62af1479864f0cae7616fd7e10a7d2&page=2`)
    let dos = axios.get(`https://api.rawg.io/api/games?key=6d62af1479864f0cae7616fd7e10a7d2&page=3`)
    let tres = axios.get(`https://api.rawg.io/api/games?key=6d62af1479864f0cae7616fd7e10a7d2&page=4`)
    let cuatro = axios.get(`https://api.rawg.io/api/games?key=6d62af1479864f0cae7616fd7e10a7d2&page=5`)
    
    const url = await Promise.all([cero, uno, dos, tres, cuatro]);
    cero = url[0].data.results
    uno = url[1].data.results
    dos=url[2].data.results
    tres=url[3].data.results
    cuatro=url[4].data.results
    const urlTotal= cero.concat(uno).concat(dos).concat(tres).concat(cuatro);
    
    const info = urlTotal.map(ar=>{
        return {
            id: ar.id,
            name: ar.name,
            released: ar.released,
            background_image: ar.background_image,
            rating: ar.rating,
            ratings: ar.ratings.map(a=>a),
            platforms: ar.platforms.map(a=>a),
            genres: ar.genres.map(a=>a)
        }
    }); return info;
}

const getDbInfo = async ()=> {
    let infoDb = [];
    infoDb = await Videogame.findAll({
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes:[]
            }
        }
    })
    return infoDb
}

const getAllInfo = async ()=> {
    const api = await getApiInfo();
    const db = await getDbInfo();
    const infoTotal = api.concat(db);
    return infoTotal
}

module.exports = {
    getAllInfo,
}