const sequelize = require('sequelize')
const connection = require('../database/database')

Produto = connection.define('produtos', {
    descricao: {
        type: sequelize.STRING,
        allowNull: false
    },
    marca: {
        type: sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: sequelize.FLOAT,
        allowNull: false
    },
    quantidade: {
        type: sequelize.INTEGER,
        allowNull: false
    },
})

Produto.sync()
module.exports = Produto