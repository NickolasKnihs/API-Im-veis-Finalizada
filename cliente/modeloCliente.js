const Sequelize = require ('sequelize');
const conexao = require ('../conexao/conexao');
const Endereco = require ('../endereco/modeloEndereco');
const Cliente = conexao.define('cliente', {
    codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    codEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Endereco,
            key: 'codEndereco'
        },
        onDelete: 'CASCADE'
    }    
}, {timestamps: false});

Cliente.sync({
    alter: true
});

module.exports = Cliente;