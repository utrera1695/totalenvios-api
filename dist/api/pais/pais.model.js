'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../../config/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sequelize = require('sequelize');

var Pais = _db["default"].define('ps_pais', {
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
});

Pais.removeAttribute('id');
var _default = Pais;
exports["default"] = _default;