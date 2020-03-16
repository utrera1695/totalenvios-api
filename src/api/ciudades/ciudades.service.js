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
const FindAllState = async (pais) => {
  let ciudades = Ciudades.findAll({
    where: {
      id_pais: pais
    }
  })
  var estados = ciudades.filter((a, b) => a.nombreEstadosDet !== b.nombreEstadosDet).map(a => {
    return a.nombreEstadosDet
  })
  return estados
}

export default {
  SaveCiudad,
  FindCiudadByState,
  FindAllState
}