var Sequelize = require('sequelize'),
    sequelize = new Sequelize('postgres://user:pass@localhost/database')

module.exports = sequelize
