const {Pool} = require('pg');
const db = new Pool({
    user: 'oabub037',
    host: 'web0.eecs.uottawa.ca',
    database: 'oabub037',
    password: 'Ibra1234@@',
    port: 15432,
});


module.exports = db;