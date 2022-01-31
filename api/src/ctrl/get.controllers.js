const axios = require('axios')
const { API_KEY } = process.env;
const {Videogame, Genres} = require('../db')

const getApiInfo = async ()=> {
    const url = await axios.get(`https://api.rawg.io/api/games?key=6d62af1479864f0cae7616fd7e10a7d2`)
    const info = await url.data.results.map(ar=>{
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
    return await Videogame.findAll({
        include: {
            model: Genres,
            attributes: ['name'],
        }
    })
}

const getAllInfo = async ()=> {
    const api = await getApiInfo();
    const db = await getDbInfo();
    const info = api.concat(db);
    // return [...api, ...db]
    return info;
}

module.exports = {
    getAllInfo,
}