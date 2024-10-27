const Sequelize = require("sequelize")
const connection = new Sequelize('lojinha', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

module.exports = connection