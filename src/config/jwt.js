'use strict';

import {
  encode
} from 'jwt-simple';
import moment from 'moment';
const secret = 'tenvios202#%!utrera95';

const createToken = user => {
  var payload = {
    sub: user.id_user,
    email: user.email,
    iat: moment().unix(),
    exp: moment().add(30, 'days')
      .unix()
  };
  return encode(payload, secret);
};

export default {
  createToken
};