require('dotenv').config();
// connecting to sequelize
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? // only for deployment on heroku
    new Sequelize(process.env.JAWSDB_URL)
  : // Sequelize instance
    new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;
