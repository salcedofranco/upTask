const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('UpTaskNode', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: '3306',
    operatorAliases: false,
    define: {
        timestamps: false

    },

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }

});

module.exports = sequelize;
