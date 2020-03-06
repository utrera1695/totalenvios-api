'use strict'

import sequelize from '../../config/db'

const Sequelize = require('sequelize');
const Box =
  sequelize.define('ps_box', {
    id_box: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    nombre: Sequelize.TEXT,
    l: Sequelize.DOUBLE(11, 2),
    w: Sequelize.DOUBLE(11, 2),
    h: Sequelize.DOUBLE(11, 2),
    lib_vol: Sequelize.DOUBLE(11, 2),
    ft3: Sequelize.DOUBLE(11, 2),
    peso_lb: Sequelize.DOUBLE(11, 2),
    fecha_trans: {
      type: Sequelize.INTEGER(11)
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
Box.removeAttribute('id')
export default Box