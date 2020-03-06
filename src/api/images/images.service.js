'use strict';

import Image from './images.model';


const Save = async (body) => {
  return await Image.sync({
    force: false
  }).then(() => {
    return Image.create(body)
  })
}

const GetImage = async (type) => {
  return await Image.findAll({
    where: {
      type: type
    }
  });
}

const DeleteImage = async (id) => {
  return await Image.destroy({
    where: {
      id_image: id
    }
  })
}
export default {
  Save,
  GetImage,
  DeleteImage
}