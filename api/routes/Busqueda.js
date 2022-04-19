const express = require ('express');
const Busqueda = express.Router()
const axios = require('axios');
const apiKey= '0ed87d57b84f7c9d6c2300276bae6c03';
const https = require("https");
const { useParams } = require('react-router-dom');
const bodyParser = require('body-parser');


axios.default.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";


 Busqueda.post('/', (req,res)=>{
  const media= req.body.type
  const mediaName= req.body.searchInput
  
    axios.get(`https://api.themoviedb.org/3/search/${media}?api_key=${apiKey}&query=${mediaName}`)
   .then((buscado)=> res.send(buscado.data.results))
}) 



Busqueda.post('/single', async (req, res)=>{

const body= req.body
const id= body.id;
var type= body.type;

if(type === 'movies') type= 'movie'
if(type === 'tvs') type= 'tv'




axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`)
.then((buscado)=> res.send(buscado.data))

})

module.exports= Busqueda
