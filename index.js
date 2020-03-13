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
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

app.post('/signin', (req,res)=>{
    const user = req.body;
    const who = Object.keys(user)[0]
    // if(who == 'guest_id'){
    //     const query = "INSERT INTO guest(guest_id,password,first_name,last_name,email,address,phone_no) VALUES ($1,$2,$3,$4,$5,$6,$7)";
    //     const text = [user.guest_id, user.password, user.first_name, user.last_name, user.email, user.address, user.phone_no];
    //     db.query(query,text, (err,result)=>{
    //         if (err){
    //             return console.error('Error executing query', err.stack);
    //         }
    //     })
    // }else if(who == 'host_id'){
    //     const query = "INSERT INTO host(host_id ,branch_id ,password ,first_name ,last_name ,email ,phone_no) VALUES ($1,$2,$3,$4,$5,$6,$7)";
    //     const text = [user.guest_id ,user.branch_id ,user.password, user.first_name, user.last_name, user.email, user.phone_no];
    //     db.query(query,text, (err,result)=>{
    //         if (err){
    //             return console.error('Error executing query', err.stack);
    //         }
    //     })
    // }else if(who == 'employee_id'){
    //     const query = "INSERT INTO guest(guest_id,password,first_name,last_name,email,address,phone_no) VALUES ($1,$2,$3,$4,$5,$6,$7)";
    //     const text = [user.guest_id, user.password, user.first_name, user.last_name, user.email, user.address, user.phone_no];
    //     db.query(query,text, (err,result)=>{
    //         if (err){
    //             return console.error('Error executing query', err.stack);
    //         }
    //     })
    // }else{
    //     console.log("Who are you? You are not employee, guest or host loool")
    // }
    console.log(user);
    console.log(user.name);
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