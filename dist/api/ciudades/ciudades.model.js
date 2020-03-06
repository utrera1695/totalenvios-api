'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../../config/db"));

var _pais = _interopRequireDefault(require("../pais/pais.model"));

var _origen = _interopRequireDefault(require("../origen/origen.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sequelize = require('sequelize');

var Ciudad = _db["default"].define('ps_ciudades_det', {
  id_ciudades_det: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    unique: 'compositeIndex',
    autoIncrement: true
  },
  id_origen: {
    type: Sequelize.INTEGER(11),
    references: {
      model: _origen["default"],
      key: 'id_origen'
    }
  },
  id_pais: {
    type: Sequelize.INTEGER(11),
    references: {
      model: _pais["default"],
      key: 'id_pais'
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
});

Ciudad.removeAttribute('id');
var _default = Ciudad;
exports["default"] = _default;