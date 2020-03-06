"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* const sequelize = new Sequelize(
  'totalenvio',
  'totalenvio_user',
  'totalenvio123', {
    host: '160.153.59.227',
    dialect: 'mysql'
  }
); */

/* const sequelize = new Sequelize(
  'totalenvio',
  'root',
  '', {
    host: 'localhost',
    dialect: 'mysql'
  }
); */
var sequelize = new _sequelize["default"]('mysql://n8c8mej60fvxk3ni:x3n3fobo4coinbb2@m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ymshydcxmbhhme8a');
var _default = sequelize;
exports["default"] = _default;