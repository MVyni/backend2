const sequelize = require("./src/config/database");
const User = require("./src/models/Users");
const { JWT } = require("google-auth-library");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./src/config/users-project.json");


const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: SCOPES,
});


async function googleSheets() {
  try {
    const doc = new GoogleSpreadsheet("11cyKVRpCRP0Y7KTVV52Zop5L_JqidI8l1Bx-AAXeaXI", jwt);
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadHeaderRow()

    
    //await sheet.addRow({email: "carol@gmail.com", nome: "Carolina", senha: "ca5862", telefone: "7898-5496", cep: "20943-000"})
    const rows = await sheet.getRows()
    
    rows.forEach((user) => {
      const dados = user.toObject()
      console.log(dados)
    })
 
  
  } catch (error) {
    console.log(error)
  }
}

googleSheets()



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

  



async function userCreate() {
  try {
    const newUser = await User.create({
      name: "Marcus Vynicius",
      email: "marcusvynicius@gmail.com",
      password: "teste123",
      celphone: 11222233,
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