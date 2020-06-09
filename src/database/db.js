//importar dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//Criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados para nossas operações
db.serialize( () => {
 //Criar a tabela
 const queryCreatTable = `
 CREATE TABLE IF NOT EXISTS places (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   image TEXT,
   name TEXT,
   address TEXT,
   address2 TEXT,
   state TEXT,
   city TEXT,
   items TEXT,
   email TEXT,
   senha TEXT
 );
` 

  db.run(queryCreatTable)

  
  // //Inserir dados na tabela
  // const queryInsert = `
  //   INSERT INTO places (
  //     image, 
  //     name,
  //     address, 
  //     address2, 
  //     state, 
  //     city, 
  //     items,
  //     email,
  //     senha
  //   ) VALUES (
  //     ?, ?, ?, ? , ?, ?, ?, ?, ?   
  //   );
  // `    

  // //Valores a serem usados no insert
  // const values = [
  //   "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  //   "Papersider",
  //   "Guilherme Gemballa. Jardim America",
  //   "Nº 260",
  //   "SC",
  //   "Rio do Sul",
  //   "Residuos Eletrônicos, Lâmpadas",
  //   "nynho2@gmail.com",
  //   "12345"
  // ]

  // //Função de callback após a inserção dos dados na tabela
  // function afterInsertData(err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Cadastrado com sucesso")
  //   console.log(this)
  // }

  // //Execução do insert
  // db.run(queryInsert, values, afterInsertData)
  



  // //Ler dados da tabela
  // db.all(`SELECT * FROM places`, function (err, rows) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Aqui estão seus registros")
  //   console.log(rows)

  // })


  //deletar dados da tabela
  // db.run(`DELETE FROM places`, function(err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Registros deletados com sucesso")

  // })


  // //Alterar registros da tabela
  // db.run(`UPDATE places 
  //   SET image = ?,
  //   name =?,
  //   address =?, 
  //   address2 =?, 
  //   state =?, 
  //   city =?, 
  //   items =? where id= ? `,["linkdaImagem","nome", "endereco", "numero", "estado", "cidade", "items", 16], function(err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Registro alterado  com sucesso")

  // })



})