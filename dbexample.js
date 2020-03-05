const {Pool} = require('pg');
//this is our database connection
const db = new Pool({
    user: 'oabub037',
    host: 'web0.eecs.uottawa.ca',
    database: 'oabub037',
    password: 'password',
    port: 15432,
});


// Test run for what it returns when you run a query 
// try it out in terminal to check out what it returns in queries 
//dont use 
db.query("SELECT * FROM test", (err,result)=>{
    if (err) {
        return console.error('Error executing query', err.stack)
      }
    console.log(result) 
});