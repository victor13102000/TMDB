const User = require('./User');
const Favorite= require('./Favorites');

User.hasMany(Favorite, {
    foreignKey: {
      allowNull: false,
    },
  });
  Favorite.belongsTo(User);
  
  module.exports = { User, Favorite };
