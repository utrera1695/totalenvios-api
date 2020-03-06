import Box from './box.model'

const SaveBox = async (body) => {
  return await Box.sync({
    force: false
  }).then((e) => {
    return Box.create(body)
  })
}

const FindAllBox = async () => {
  return await Box.findAll()
}

export default {
  SaveBox,
  FindAllBox
}