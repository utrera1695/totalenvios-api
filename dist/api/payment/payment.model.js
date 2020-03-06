'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../../config/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sequelize = require('sequelize');

var Payment = _db["default"].define('ps_method_payment', {
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
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Payment.removeAttribute('id');
var _default = Payment;
exports["default"] = _default;