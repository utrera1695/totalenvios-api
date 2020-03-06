#!/usr/bin/env node
"use strict";

var _app = _interopRequireDefault(require("../app"));

var _http = require("http");

var _db = _interopRequireDefault(require("../config/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _http.createServer)(_app["default"]);
var PORT = process.env.PORT || 8000;

_db["default"].authenticate().then(function () {
  console.log('Conexion a la base de datos realizada');
  console.log('Conexion establecida en el puerto: ' + PORT);
  server.listen(PORT);
})["catch"](function (err) {
  console.error('Unable to connect to the database:', err);
});