const router = require("express").Router();
const { getMovies } = require("../models/movies.model");

router.get("/movies", (req, res) => {
    getMovies(req, res);
})

module.exports = router;