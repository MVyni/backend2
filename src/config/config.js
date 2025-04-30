module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "backend2",
    host: "database-1.ckv8m0ga67jq.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
