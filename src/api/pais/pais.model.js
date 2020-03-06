'use strict'

import sequelize from '../../config/db'
const Sequelize = require('sequelize');
const Pais =
  sequelize.define('ps_pais', {
    id_pais: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    nombrePais: {
      type: Sequelize.TEXT
    },
    fecha_trans: {
      type: Sequelize.INTEGER(11)
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
Pais.removeAttribute('id')
export default Pais