const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('apinodedb_p5cc', 'nodedb', 'rvdx7JXCtadjAQnKcDonksKA487cLP3T', {
host: 'dpg-cs77hq0gph6c73ffjhu0-a',
dialect: 'postgres',
});

module.exports = sequelize;