const db = require('./database');
//this is our database connection

// Test run for what it returns when you run a query 
// try it out in terminal to check out what it returns in queries 
//dont use 
db.query("SELECT * FROM payment", (err,result)=>{
    if (err) {
        return console.error('Error executing query', err.stack)
      }
    console.log(result.rows[result.rowCount-1]); 
});