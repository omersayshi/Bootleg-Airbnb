const {Pool} = require('pg');
express = require('express');
app = express();
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
db.query("SELECT * from customer", (err,result)=>{
    if (err) {
        return console.error('Error executing query', err.stack)
      }
    console.log(result.rows) 
});

const PORT = process.env.port || 3000;

app.listen(PORT, ()=>{
    console.log(`listening at locçalhost:${PORT}`);
});


//Download Postman to test this API endpoints in general
//This is how to do a GET function
app.get('/test', (req,res) =>{
    
});
app.post('/test', (req,res) =>{
    
});






