const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DBURL || 'terraform-20231101144424798700000001.csgqz8ntwwgj.us-east-1.rds.amazonaws.com',
    username: process.env.DBUSER || 'root',
    password: process.env.DBPASSWORD || 'kacperstojczykpxl',
    database: process.env.DBDATABASE || 'todo',
    port: process.env.DBPORT || 3306,
    logging: console.log
});

sequelize.authenticate((err) => {
    if (err) {
        console.log('Unable to connect to the database:', err);
    }
});

module.exports = sequelize;
