'use strict'

import sequelize from '../../config/db'
import Pais from '../pais/pais.model'
import Origen from '../origen/origen.model'

const Sequelize = require('sequelize');
const Ciudad =
  sequelize.define('ps_ciudades_det', {
    id_ciudades_det: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    id_origen: {
      type: Sequelize.INTEGER(11),
      references: {
        model: Origen,
        key: 'id_origen',
      }
    },
    id_pais: {
      type: Sequelize.INTEGER(11),
      references: {
        model: Pais,
        key: 'id_pais',
      }
    },
    nombreCiudades_det: Sequelize.TEXT,
    nombreEstadosDet: Sequelize.TEXT,
    nombreRegion: Sequelize.TEXT,
    tarifaAir1: Sequelize.DOUBLE,
    tarifaAir2: Sequelize.DOUBLE,
    tarifaOcean1: Sequelize.DOUBLE,
    tarifaOcean2: Sequelize.DOUBLE,
    fecha_trans: {
      type: Sequelize.INTEGER(11)
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
Ciudad.removeAttribute('id')
export default Ciudad