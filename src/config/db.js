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
const sequelize = new Sequelize(
  'api_totaldb',
  'api_totaldb',
  '6mhJ4$m=4@.H', {
    host: 'localhost',
    dialect: 'mysql',
  }
);

export default sequelize;
