const Sequelize = require ('sequelize');
const conexao = require ('../conexao/conexao');
const Imovel = require ('../imovel/modeloImovel');
const Cliente = require ('../cliente/modeloCliente');
const Visita = conexao.define('visita', {
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        references: {
            model: Imovel,
            key: 'codImovel'
        },
        onDelete: 'CASCADE'
    },
    codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        references: {
            model: Cliente,
            key: 'codCliente'
        },
        onDelete: 'CASCADE'
    },
    dataVisita: {
        type: Sequelize.DATE,
        allowNull: false
    },
    visitaRealizada: {
        type: Sequelize.STRING,
        allowNull: false
    } 
}, {timestamps: false});

Visita.sync({
    alter: true
});

module.exports = Visita;