const Sequelize = require ('sequelize');
const conexao = require ('../conexao/conexao');
const Imovel = require ('../imovel/modeloImovel');
const Cliente = require ('../cliente/modeloCliente');
const Corretor = require ('../corretor/modeloCorretor');
const Historico = conexao.define('historico', {
    codHistorico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    dataNegociacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    percentualComissao: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Imovel,
            key: 'codImovel'
        },
        onDelete: 'CASCADE'
    } ,
    codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'codCliente'
        },
        onDelete: 'CASCADE'
    } ,
    codCorretor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Corretor,
            key: 'codCorretor'
        },
        onDelete: 'CASCADE'
    }    
}, {timestamps: false});

Historico.sync({
    alter: true
});

module.exports = Historico;