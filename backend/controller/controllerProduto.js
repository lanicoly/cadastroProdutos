const express = require("express");
const Produto = require('../models/produto');
const { where } = require("sequelize");
const router = express.Router()

router.get("/produto/novo", (req, res)=>{
    res.render('form', {produto:null})
})

// C do CRUD
router.post('/produto/criar',  (req, res)=>{
    Produto.create({
        descricao: req.body.descricao,
        marca: req.body.marca,
        valor: req.body.valor,
        quantidade: req.body.quantidade
    })
    .then(()=>{
        console.log("Objeto criado!");
    })
    .catch((err)=>{
        console.log("Erro: "+err);
    })
    .finally(()=>{
        res.redirect('/produto/visualizar')
    })
    
})

//R do CRUD
router.get('/produto/visualizar', (req, res)=>{
    Produto.findAll()
    .then((produto)=>{
        res.render('produtos', {
            produto:produto
        })
    })
    .catch((err) => {
        console.log("Erro: "+err);
        res.redirect("/")
    })
})

router.get('/produto/editar/:id', (req,res)=> {
    var id = req.params.id;
    Produto.findByPk(id)
    .then((produto)=>{
        res.render('form', {
            produto:produto
        })
    })
    .catch((err) => {
        console.log("Erro: "+err);
        res.redirect('/produto/visualizar')
    })
})

//U do CRUD
router.post('/produto/update', (req, res) => {
    Produto.update({
        descricao: req.body.descricao,
        marca: req.body.marca,
        valor: req.body.valor,
        quantidade: req.body.quantidade
    },
    {
        where: {id: req.body.id}
    })
    .then(()=>{
        console.log("Objeto atualizado!");
    })
    .catch((err)=>{
        console.log("Erro: "+err);
    })
    .finally(()=>{
        res.redirect('/produto/visualizar')
    })
})

//D do CRUD
router.get('/produto/excluir/:id', (req,res)=> {
    var id = req.params.id;
    Produto.destroy({
        where: {id: id}
    })
    .then(()=>{
        console.log("Objeto destruído!")
    })
    .catch((err)=>{
        console.log("Erro: "+err)
    })
    .finally(()=>{
        res.redirect('/produto/visualizar')
    })
})

module.exports = router