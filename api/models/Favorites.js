const S = require("sequelize");
const db = require("../db");

class Favorite extends S.Model {}

Favorite.init({
  mediaId: {
        type: S.INTEGER,
        allowNull: false,
         validate: {
          customValidator(value) {
            return Favorite.findOne({
              where: {
                mediaId: this.mediaId,
                type: this.type,
                userId: this.userId,
              },
            }).then((foundFavorite) => {
              if (foundFavorite) throw new Error('Duplicated favorite');
            });
          },
        }, 
      },
      type: {
        type: S.STRING,
        allowNull: false,
      },
}, { sequelize: db, modelName: 'favorites' }
);

module.exports = Favorite;