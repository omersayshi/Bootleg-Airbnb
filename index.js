const path = require('path');
express = require('express');

app = express();
//Now equivalent of body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.port || 3000;

app.listen(PORT, ()=>{
    console.log(`listening at locçalhost:${PORT}`);
});


//Download Postman to test these API endpoints in general
//This is how to do a GET request
app.get('/test', (req,res) =>{
    res.json({
        name : "Omer",
        life: false
    })
});
//This how to a POST request
app.post('/test', (req,res) =>{
    res.json({
        name : "Omer",
        life: false
    })
});






