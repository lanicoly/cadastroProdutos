const express = require("express");
const app = express()
const produtos = require("./controller/controllerProduto")
const connection = require('./database/database')
const Produto = require("./models/produto")

connection.authenticate()
.then(()=>{
    console.log("Banco conectado!")
})
.catch((err)=>{
    if(err){
        console.log("Erro na conexão com o banco!" + err)
    }
})

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req,res)=>{
    console.log("Boas vindas à tela inicial!")
    res.render("index")
})

app.use("/", produtos)

app.listen(3333,(err)=>{
    if (err) {
        console.log("Deu erro!")
    } else {
        console.log("Servidor on-line!")

    }
})