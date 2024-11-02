//เชื่อมต่อฐานข้อมูล
//เชื่อมต่อฐานข้อมูล
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodedb_u5sg', 'nodedb', '2Ohh8IBM58WkWAX0mb9aIri4SLZ3xBD6', {
host: 'dpg-csiu97m8ii6s73crl500-a',
dialect: 'postgres',
});

module.exports = sequelize;
//เชื่อมต่อฐานข้อมูล