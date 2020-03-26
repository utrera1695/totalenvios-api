'use strict';
import Image from './images.model';

const Contact = async body => {
  return await Image.sync({
    force: false
  }).then(() => {
    return Image.create(body);
  });
};

export default {
  Contact
};
