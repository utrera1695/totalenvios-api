'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../../config/db"));

var _pais = _interopRequireDefault(require("../pais/pais.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sequelize = require('sequelize');

var Origen = _db["default"].define('ps_origen', {
  id_origen: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    unique: 'compositeIndex',
    autoIncrement: true
  },
  id_pais: {
    type: Sequelize.INTEGER(11),
    references: {
      model: _pais["default"],
      key: 'id_pais'
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
});

Origen.removeAttribute('id');
var _default = Origen;
exports["default"] = _default;