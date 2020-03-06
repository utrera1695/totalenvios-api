"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _pais = _interopRequireDefault(require("../api/pais/pais.controller"));

var _origen = _interopRequireDefault(require("../api/origen/origen.controller"));

var _ciudades = _interopRequireDefault(require("../api/ciudades/ciudades.controller"));

var _box = _interopRequireDefault(require("../api/box/box.controller"));

var _images = _interopRequireDefault(require("../api/images/images.controller"));

var _payment = _interopRequireDefault(require("../api/payment/payment.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/api', _pais["default"]);
router.use('/api', _origen["default"]);
router.use('/api', _ciudades["default"]);
router.use('/api', _box["default"]);
router.use('/api', _images["default"]);
router.use('/api', _payment["default"]);
var _default = router;
exports["default"] = _default;