import Seguro from './seguro.controller'

const SaveSeguro = async (body) => {
  return await Seguro.sync({
    force: false
  }).then((e) => {
    return Seguro.create(body)
  })
}

const FindSeguro = async () => {
  return await Seguro.findAll()
}

export default {
  SaveSeguro,
  FindSeguro
}