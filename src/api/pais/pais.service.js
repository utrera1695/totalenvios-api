import Pais from './pais.model'
import {
  Op
} from 'sequelize'

const SavePais = async (body) => {
  return await Pais.sync({
    force: false
  }).then((e) => {
    return Pais.create(body)
  })
}

const FindAllPais = async () => {
  return await Pais.findAll({
    where: {
      nombrePais: {
        [Op.ne]: 'USA'
      }
    }
  })
}

export default {
  SavePais,
  FindAllPais
}