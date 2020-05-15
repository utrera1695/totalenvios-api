import Sequelize from 'sequelize';
/* const sequelize = new Sequelize(
  'totalenvio',
  'totalenvio_user',
  'totalenvio123', {
    host: '160.153.59.227',
    dialect: 'mysql'
  }
); */
/* const sequelize = new Sequelize(
  'totalenvio',
  'root',
  '', {
    host: 'localhost',
    dialect: 'mysql'
  }
); */
const sequelize = new Sequelize('totalenv_bdtotalenvios', 'totalenv_api', 'gik&IMI1Y$oi', {
  host: 'localhost:3306',
  dialect: 'mysql'
});

export default sequelize