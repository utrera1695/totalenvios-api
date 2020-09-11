import Pricemin from './pricemin.model'

const SaveBox = async (body) => {
  return await Pricemin.sync({
    force: false
  }).then((e) => {
    return Pricemin.create(body)
  })
}

const FindAll = async () => {
  return await Pricemin.findAll()
}

export default {
  SaveBox,
  FindAll
}