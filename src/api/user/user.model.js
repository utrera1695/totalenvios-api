'use strict'

import sequelize from '../../config/db'
const Sequelize = require('sequelize');
const User =
  sequelize.define('ps_user_app', {
    id_user: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    email: Sequelize.TEXT,
    password: Sequelize.TEXT,
    name: Sequelize.TEXT,
    business: Sequelize.TEXT,

    fecha_trans: {
      type: Sequelize.INTEGER(11)
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
User.removeAttribute('id')
export default User