const express = require ('express');
const Busqueda = express.Router()
const axios = require('axios');
const apiKey= '0ed87d57b84f7c9d6c2300276bae6c03';
const https = require("https");


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

Busqueda.get('/single', async (req, res)=>{
try {
  const body= req.body;

const id= body.id;
const type= body.type;
console.log(id, type)

const single= await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`)
console.log(single)



} catch (error) {
  console.log(error)
}

})

module.exports= Busqueda
