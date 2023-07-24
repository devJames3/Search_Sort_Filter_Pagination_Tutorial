require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const movieRoutes = require("./Routes/movies");

// const { withDB } = require("./dbConnect")

app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));