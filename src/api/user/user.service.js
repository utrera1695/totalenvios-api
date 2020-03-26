'use strict'
import User from './user.model'
import bcrypt from 'bcryptjs';
import jwtCreate from '../../config/jwt';

const Login = async (body) => {
  let UserExist = User.findOne({
    where: {
      email: data.email
    }
  })
  if (UserExist) {
    const compareHash = bcrypt.compareSync(body.password, UserExist.password);
    if (compareHash) {
      /* ENVIA EL TOKEN CON EL ROLE DEL USUARIO */
      return ({
        token: jwtCreate.createToken(UserExist),
        usuario: UserExist
      })
    } else {
      throw {
        code: 400,
        error: 'Contraseña incorrecta usuario'
      }
    }
  } else {
    throw {
      code: 400,
      error: 'No existe el usuario'
    }
  }
}

const Register = async (data) => {
  let UserExist = User.findOne({
    where: {
      email: data.email
    }
  })
  if (!UserExist) {
    data.password = bcrypt.hashSync(data.password, 10);
    return await User.sync({
      force: false
    }).then((e) => {
      return User.create(data)
    })
  } else {
    throw {
      code: 400,
      error: 'Ya existe un usuario con este email'
    }
  }
}

export default {
  Login,
  Register
}