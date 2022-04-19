const express = require("express");
const routes = express.Router();
const Peliculas = require("./Peliculas");
const Series = require("./Series");
const Busqueda= require("./Busqueda")
const Register= require("./Resgister")
const Login= require("./Login")
const Favorites = require("./favorites")

routes.use("/movies", Peliculas);
routes.use("/tv", Series);
routes.use("/search",Busqueda)
routes.use("/register", Register)
routes.use("/login", Login )
routes.use("/favorites", Favorites)





module.exports = routes;
