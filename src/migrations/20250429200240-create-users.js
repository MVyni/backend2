
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      password: Sequelize.STRING,
      celphone: Sequelize.INTEGER,
      adress: Sequelize.STRING,

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }      
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Users")
  }
};
