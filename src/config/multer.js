import multer from 'multer';
import fs from 'fs';

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },

  filename: (req, file, cb) => {
    console.log(file);
    var filetype = '';

    fs.exists('./public/images' + file.originalname, exists => {
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
var upload = multer({
  storage: storage
});
export default upload;