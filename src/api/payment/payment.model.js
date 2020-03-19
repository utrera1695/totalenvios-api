'use strict'

import sequelize from '../../config/db'
const Sequelize = require('sequelize');
const Payment =
  sequelize.define('ps_method_payment', {
    id_payment: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    name: {
      type: Sequelize.TEXT
    },
    percent: Sequelize.DOUBLE(11, 2),
    fecha_trans: {
      type: Sequelize.INTEGER(11)
    },
    tipo: {
      type: Sequelize.INTEGER(11)
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
Payment.removeAttribute('id')
export default Payment