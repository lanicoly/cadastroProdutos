const express = require("express");
const Produto = require('../models/produto');
const router = express.Router()

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
router.delete('/produto/excluir/:id', (req,res)=> {
    var id = req.params.id;
    Produto.destroy({
        where: {id: id}
    })
    .then(()=>{
        console.log("Objeto destruído!");
        return res.status(200).json({ message: "Produto destruido com sucesso!" });
    })
    .catch((err)=>{
        console.log("Erro: "+err);
        return res.status(500).json({ err: err.message });
    })

})

module.exports = router