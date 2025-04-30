const sequelize = require("./src/config/database");
const User = require("./src/models/Users");

async function app() {
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com banco de dados estabelecida");
  } catch (error) {
    console.log("Erro na conexão", error);
  }
}

await testConnection();
/*await User.sync()*/


async function userCreate() {
  try {
    const newUser = await User.create({
      name: "Marcus Vynicius",
      email: "marcusvynicius@gmail.com",
      password: "teste123",
      celphone: 1122-2233,
      adress: "Av das Americas 1023",
    })
    console.log("Insert user sucessful!", newUser.toJSON())
  } catch (error) {
    console.log("User not insert", error)
  }
}

 /*await userCreate();*/

 async function users() {
  try {
    const users = await User.findAll();
    console.log("List of Users", users.map((u)=> u.toJSON()));
    
  } catch (error) {
    console.log("User not found", error)
  }
 }

 /*users();*/

async function findUser(email) {
  try {
    await User.findByPk(email)
    .then((user) => {
      console.log("Username: ", user.name)
      console.log("User e-mail: ", user.email)
    })
  } catch (error) {
    console.log(error);
  }
}

/*await findUser("marcusvynicius@gmail.com");*/

async function userUpdate(email) {
  try {
    const user = await User.findByPk(email)
    user.update({celphone: 22326010});

  } catch (error) {
    console.log("User not found", error);
  }
}

/*userUpdate("marcusvynicius@gmail.com")*/

async function userDelete(email) {
  try {
    const user = await User.findByPk(email)
    user.destroy()    

  } catch (error) {
    console.log("User not found", error)
  }
}

}

app()