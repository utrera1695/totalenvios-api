import Payment from './payment.model'

const SavePayment = async (body) => {
  return await Payment.sync({
    force: false
  }).then((e) => {
    return Payment.create(body)
  })
}

const FindAllPayment = async () => {
  return await Payment.findAll()
}

export default {
  SavePayment,
  FindAllPayment
}