#!/usr/bin/env node

import app from '../app';
import {
  createServer
} from 'http';
import sequelize from '../config/db'

var server = createServer(app);
const PORT = process.env.PORT || 8000;

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexion a la base de datos realizada');
    console.log('Conexion establecida en el puerto: ' + PORT)
    server.listen(PORT);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });