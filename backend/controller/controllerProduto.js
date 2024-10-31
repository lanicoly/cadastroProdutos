const express = require("express");
const Produto = require('../models/produto');
const { where } = require("sequelize");
const router = express.Router()

// router.get("/produto/novo", (req, res)=>{
//     console.log("Página para criar novo produto");
//     res.render('form', {produto:null})
// })

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
        res.status(201).json();
        
    })
    .catch((err)=>{
        console.log("Erro: "+err);
    })
    
})

//R do CRUD
router.get('/produto/visualizar', async (req, res) =>{
    produtos = await Produto.findAll({
        order:[['id', 'ASC']]
    })
    return res.status(200).json(produtos)
})

// router.get('/produto/editar/:id', async (req,res)=> {
//     var id = req.params.id;
//     produtos = await Produto.findByPk(id)
//     console.log("Página para atualizar um produto");
//     return res.status(200).json(produtos)
//     })


// U do CRUD
router.put('/produto/editar/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const [updated] = await Produto.update({
            descricao: req.body.descricao,
            marca: req.body.marca,
            valor: req.body.valor,
            quantidade: req.body.quantidade
        }, {
            where: { id: req.params.id }
        });

        if (updated) {
            console.log("Objeto atualizado!");
            return res.status(200).json({ message: "Produto atualizado com sucesso!" });
        }
        throw new Error('Produto não encontrado');
    } catch (error) {
        console.log("Erro: " + error);
        return res.status(500).json({ error: error.message });
    }
});

//D do CRUD
router.get('/produto/excluir/:id', (req,res)=> {
    var id = req.params.id;
    Produto.destroy({
        where: {id: id}
    })
    .then(()=>{
        console.log("Objeto destruído!")
        console.log("Página para excluir produto");
    })
    .catch((err)=>{
        console.log("Erro: "+err)
    })
    .finally(()=>{
        res.redirect('/produto/visualizar');
    })
})

module.exports = router