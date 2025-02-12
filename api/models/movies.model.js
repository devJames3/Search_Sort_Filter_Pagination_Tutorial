const { withDB } = require("../dbConnect");
const movies = require("../config/movies.json");

async function getMovies(req, res) {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "rating";
        let genre = req.query.genre || "All";

        const genreOptions = [
            "Action",
            "Romance",
            "Fantasy",
            "Drama",
            "Adventure",
            "Thriller",
            "Sci-fi",
            "Music",
            "Family",
        ];

        genre === "All" ? (genre = [...genreOptions]) : (genre = req.query.genre.split(","));

        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};

        if (sort && sort.length === 2) {
            sortBy[sort[0]] = sort[1] === 'desc' ? -1 : 1;
        } else if (sort && sort.length === 2) {
            sortBy[sort[0]] = sort[1] === 'asc' ? 1 : -1;
        } else if (sort.length == 1) {
            sortBy[sort[0]] = 1;
        }

        withDB(async (db) => {
            const regexSearch = new RegExp(search, 'i');

            const query = {
                name: { $regex: regexSearch },
                genre: { $in: genre },
            };

            const options = {
                sort: sortBy,
                skip: page * limit,
                limit: limit,
            };

            const movies = await db.collection('movies').find(query, options).toArray();

            const total = await db.collection("movies").countDocuments(query)

            const response = {
                error: false,
                total,
                page: page + 1,
                limit,
                genres: genreOptions,
                movies,
            }

            res.status(200).json(response);
        }, res)

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: true, message: "internal Server Error" });
    }
}

// const insertMovies = async (res) => {
//     try {
//         withDB(async (db) => {
//             const docs = await db.collection("movies").insertMany(movies);
//             console.log(docs);
//         }, res)
//     } catch (err) {
//         console.log(err);
//     }
// }

// insertMovies();

module.exports = { getMovies }