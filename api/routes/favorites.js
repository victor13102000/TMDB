const bodyParser = require("body-parser");
const express = require("express");
const favorites = express.Router();
const Favorite = require('../models/Favorites')

favorites.post("/addtofavorite", (req, res, next) => {
  
    const body = req.body;
    const type = body.type;
    const mediaId= body.mediaId
    const userId = body.userId

 Favorite.create({type:type,mediaId: mediaId,userId: userId})
.then((addedFavorite) => res.status(201).send(addedFavorite))
    .catch((err) => next(err)); 
});


favorites.get('/:id', (req, res)=>{
 const id=  req.params.id
  Favorite.findAll({where:{userId:id}})
  .then(respuesta=> res.send(respuesta))
})




module.exports = favorites;
