//Edit this for the database connection
const {Pool} = require('pg');
const db = new Pool({
    user: 'dbuser',
    host: 'database.server.com',
    database: 'mydb',
    password: 'secretpassword',
    port: 3211,
});


module.exports = db;