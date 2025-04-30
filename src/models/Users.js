const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    celphone: DataTypes.INTEGER,
    adress: DataTypes.STRING
})

module.exports = User;