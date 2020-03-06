'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../../config/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sequelize = require('sequelize');

var Box = _db["default"].define('ps_box', {
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
});

Box.removeAttribute('id');
var _default = Box;
exports["default"] = _default;