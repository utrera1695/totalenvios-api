import Origen from './origen.model'

const SaveOrigen = async (body) => {
  return await Origen.sync({
    force: false
  }).then(() => {
    return Origen.create(body)
  })
}

const FindAllOrigen = async (id_pais) => {
  return await Origen.findAll({
    where: {
      id_pais: id_pais
    }
  })
}

export default {
  SaveOrigen,
  FindAllOrigen
}