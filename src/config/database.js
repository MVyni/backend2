const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    "backend2",
    "postgres",
    "postgres",
    {
        host: "database-1.ckv8m0ga67jq.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

module.exports = sequelize;