const path = require('path');
express = require('express');
app = express();
router = express.Router();

//Database
const {Pool} = require('pg');
const db = new Pool({
    user: 'oabub037',
    host: 'web0.eecs.uottawa.ca',
    database: 'oabub037',
    password: 'password',
    port: 15432,
});

//Now equivalent of body parser
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

app.post('/signin', (req,res)=>{
    const user = req.body;
    const who = Object.keys(user)[0]
    if(who == 'guest_id'){
        
    }else if(who == 'host_id'){
        
    }else if(who == 'employee_id'){

    }else{
        console.log("Who are you? You are not employee, guest or host loool")
    }
    console.log(Object.keys(user)[0] == 'guest_id')
});

// app.get('/whatever', (req,res)=>{

// });

// app.post('/whatever', (req,res)=>{
//     res.send("a7a");
// });

const PORT = process.env.port || 3000;

app.listen(PORT, ()=>{
    console.log(`listening at locçalhost:${PORT}`);
});