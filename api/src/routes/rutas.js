const { Router } = require('express');
const axios = require('axios')
const { API_KEY } = process.env;
const {Videogame, Genres} = require('../models')

const getApiInfo = async ()=> {
    const url = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const info = await url.data.results(ar=>{
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
    return info;
}