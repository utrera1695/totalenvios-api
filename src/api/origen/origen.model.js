'use strict'

import sequelize from '../../config/db'
import Pais from '../pais/pais.model'

const Sequelize = require('sequelize');
const Origen =
  sequelize.define('ps_origen', {
    id_origen: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    id_pais: {
      type: Sequelize.INTEGER(11),
      references: {
        model: Pais,
        key: 'id_pais',
      }
    },
    nombreSucursal: {
      type: Sequelize.CHAR(255)
    },
    fecha_trans: {
      type: Sequelize.INTEGER(11)
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
Origen.removeAttribute('id')
export default Origen