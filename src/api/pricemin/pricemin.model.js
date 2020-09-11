'use strict'

import sequelize from '../../config/db'

const Sequelize = require('sequelize');
const Box =
  sequelize.define('ps_pricemin', {
    id_pricemin: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    type: {
      type: Sequelize.INTEGER(11)
    },
    lbmin: Sequelize.DOUBLE(11, 2),
    tarifamin1: Sequelize.DOUBLE(11, 2),
    tarifamin2: Sequelize.DOUBLE(11, 2),
  }, {
    timestamps: false,
    freezeTableName: true
  })
Box.removeAttribute('id')
export default Box