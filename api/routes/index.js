const express = require("express");
const routes = express.Router();
const Peliculas = require("./Peliculas");
const Series = require("./Series");
const Busqueda= require("./Busqueda")
const Register= require("./Resgister")
const Login= require("./Login")

routes.use("/movies", Peliculas);
routes.use("/tv", Series);
routes.use("/search",Busqueda)
routes.use("/register", Register)
routes.use("/login", Login )
module.exports = routes;
