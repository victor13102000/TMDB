const express = require ('express');
const Busqueda = express.Router()
const axios = require('axios')
const apiKey= '0ed87d57b84f7c9d6c2300276bae6c03';

Busqueda.get('/:name', (req,res)=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`)
   .then((buscado)=> res.send(buscado.data.results))
})


module.exports= Busqueda
