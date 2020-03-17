'use strict'

import sequelize from '../../config/db'
const Sequelize = require('sequelize');
const Seguro =
  sequelize.define('ps_seguro', {
    id_seguro: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    percent: Sequelize.DOUBLE(11, 2),
    fecha_trans: {
      type: Sequelize.INTEGER(11)
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
Seguro.removeAttribute('id')
export default Seguro