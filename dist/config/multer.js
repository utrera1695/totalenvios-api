"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './public/images');
  },
  filename: function filename(req, file, cb) {
    console.log(file);
    var filetype = '';

    _fs["default"].exists('./public/images' + file.originalname, function (exists) {
      if (!exists) {
        if (file.mimetype === 'image/gif') {
          filetype = 'gif';
        }

        if (file.mimetype === 'image/png') {
          filetype = 'png';
        }

        if (file.mimetype === 'image/jpeg') {
          filetype = 'jpg';
        }

        cb(null, file.originalname);
      } else {
        cb(new Error("I don't have a clue!"));
      }
    });
  }
});

var upload = (0, _multer["default"])({
  storage: storage
});
var _default = upload;
exports["default"] = _default;