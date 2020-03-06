'use strict';

import sequelize from '../../config/db'
const Sequelize = require('sequelize');

const Image =
  sequelize.define('ps_images', {
    id_image: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    imagen: Sequelize.STRING(255),
    type: Sequelize.STRING,
    fecha_trans: {
      type: Sequelize.INTEGER(11)
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })

Image.removeAttribute('id')
export default Image