const { getAllInfo } = require('../ctrl/get.controllers');

const { Router } = require("express");
const router = Router();

router.get('/', async (req, res) => {
    const name = req.query.name
    if (!name) {
        return res.status(200).send(await getAllInfo());
    }else {
        const game = getAllInfo.filter(e=>e.name.toLowerCase().include(name));
        return res.status(200).send(game);
    }
})

module.exports = router;