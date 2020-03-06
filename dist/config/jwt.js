"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jwtSimple = require("jwt-simple");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var secret = "delivery202#%!utrera95";

var createToken = function createToken(user) {
  var payload = {
    sub: user._id,
    email: user.email,
    role: user.role,
    iat: (0, _moment["default"])().unix(),
    exp: (0, _moment["default"])().add(7, "days").unix()
  };
  return (0, _jwtSimple.encode)(payload, secret);
};

var _default = createToken;
exports["default"] = _default;