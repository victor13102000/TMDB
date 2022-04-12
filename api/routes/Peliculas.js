const express = require ('express');
const Peliculas = express.Router()
const axios = require('axios')
const apiKey= '0ed87d57b84f7c9d6c2300276bae6c03';

Peliculas.get('/', (req,res)=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
   .then((peliculas)=> res.send(peliculas.data.results))
})

module.exports= Peliculas
