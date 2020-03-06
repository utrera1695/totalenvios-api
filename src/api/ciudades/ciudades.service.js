import Ciudades from './ciudades.model'

const SaveCiudad = async (body) => {
  return await Ciudades.sync({
    force: false
  }).then(() => {
    return Ciudades.create(body)
  })
}

const FindCiudadByState = async (estado) => {
  return await Ciudades.findAll({
    where: {
      nombreEstadosDet: estado
    }
  })
}

export default {
  SaveCiudad,
  FindCiudadByState,
}