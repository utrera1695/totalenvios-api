'use strict';

import sequelize from '../../config/db';
const Sequelize = require('sequelize');
const User = sequelize.define(
  'ps_user_app',
  {
    id_user: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      unique: 'compositeIndex',
      autoIncrement: true
    },
    email: { type: Sequelize.TEXT, allowNull: false },
    password: { type: Sequelize.TEXT, allowNull: false },
    nombre: { type: Sequelize.TEXT, defaultValue: '' },
    empresa: { type: Sequelize.TEXT, defaultValue: '' },
    direccion: { type: Sequelize.TEXT, defaultValue: '' },
    telefono: { type: Sequelize.TEXT, defaultValue: '' },

    fecha_trans: {
      type: Sequelize.INTEGER(11)
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
User.removeAttribute('id');
export default User;
