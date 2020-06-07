const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")

server.use(express.static("public"))

server.use(express.urlencoded({extended:true}))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express:server,
  noCache:true
})


server.get("/", (req, res) => {
  return res.render("index.html")
})



server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.post("/savepoint", (req,res) => {

  //Inserir dados na tabela
  const queryInsert = `
    INSERT INTO places (
      image, 
      name,
      address, 
      address2, 
      state, 
      city, 
      items
    ) VALUES (
      ?, ?, ?, ? , ?, ?, ?   
    );
  `    

  //Valores a serem usados no insert
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  //Função de callback após a inserção dos dados na tabela
  function afterInsertData(err) {
    if (err) {
      console.log(err)
      return res.send("Erro no cadastro!")
    }

    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", {saved:true})
  }

  //Execução do insert
  db.run(queryInsert, values, afterInsertData)
  
})



server.get("/search", (req, res) => {

  const search = req.query.search

  if (search == "") {
    return res.render("search-results.html", {total:0})
  }


  //pegar os dados do banco de dados
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%' `, function (err,rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length

    //Mostrar a pagina html com os dados do banco de dados  
    return res.render("search-results.html", {places: rows, total})
  })

  
})

server.listen(3000)