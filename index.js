const path = require('path');
express = require('express');
app = express();
const db = require('./database');
const Cookie = require('./bootlegcookie');

//Now equivalent of body parser
//app.use(cors());

const cookie = new Cookie();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

app.post('/signup', (req,res)=>{
    const user = req.body;
    const who = Object.values(user)[0]
    if(who == 'Guest'){
        const query = "INSERT INTO guest(guest_id,password,first_name,last_name,email,address,phone_no) VALUES ($1,$2,$3,$4,$5,$6,$7)";
        const text = [user.username, user.password, user.first_name, user.last_name, user.email, user.address, user.phone_no];
        db.query(query,text, (err,result)=>{
            if (err){
                return console.error('Error executing query', err.stack);
            }
        })
    }else if(who == 'Host'){
        const query = "INSERT INTO host(host_id ,branch_id ,password ,first_name ,last_name ,email ,phone_no) VALUES ($1,$2,$3,$4,$5,$6,$7)";
        const text = [user.username ,user.branch_id ,user.password, user.first_name, user.last_name, user.email, user.phone_no];
        db.query(query,text, (err,result)=>{
            if (err){
                return console.error('Error executing query', err.stack);
            }
        })
    }else if(who == 'Employee'){
        const query = "INSERT INTO Employee(employee_id,password,first_name,last_name,email,branch_id,phone_no) VALUES ($1,$2,$3,$4,$5,$6,$7)";
        const text = [user.username, user.password, user.first_name, user.last_name, user.email, user.branch_id, parseInt(user.phone_no)];
        db.query(query,text, (err,result)=>{
            if (err){
                return console.error('Error executing query', err.stack);
            }
        })
    }else{
        console.log("Who are you? You are not employee, guest or host loool")
    }
    console.log("User added to the database!");
    res.sendFile(path.join(__dirname,'/public/signin.html'));
});

app.post('/signin', (req,ress)=>{
    const user = req.body;
    const who = Object.values(user)[0]
    console.log(user);
    if(who == 'Guest'){
        const query ='SELECT * FROM guest where guest_id = $1 AND password = $2';
        const text = [user.username,user.password];
        db.query(query, text, (err,res)=>{
            if (err){
                return console.error('Error executing query', err.stack);
            }
    
            if (res.rowCount == 0){
                ress.status(404).send('Username not found or password is wrong. Signup or check password pls.')
            }else{
                
                //sets cookie to play with
                cookie.set(user.username,'guest');
                cookie.setfirstname(res.rows[0].first_name);
                //takes us to the users page
                ress.redirect('/user');
            }
        })
    }else if(who == 'Host'){
        const query ='SELECT * FROM host where guest_id = $1 AND password = $2';
        const text = [user.username,user.password];
        db.query(query, text, (err,res)=>{
            if (err){
                return console.error('Error executing query', err.stack);
            }
    
            if (res.rowCount == 0){
                ress.status(404).send('Username not found or password is wrong. Signup or check password pls.')
            }else{
                cookie.set(user.username,'host');
            }
        })
    }else if(who == 'Employee'){
        const query ='SELECT * FROM employee where guest_id = $1 AND password = $2';
        const text = [user.username,user.password];
        db.query(query, text, (err,res)=>{
            if (err){
                return console.error('Error executing query', err.stack);
            }
    
            if (res.rowCount == 0){
                ress.status(404).send('Username not found or password is wrong. Signup or check password pls.')
            }else{
                cookie.set(user.username,'employee');
            }
        })
    }else{
        console.log("Who are you? You are not employee, guest or host loool")
    }
});


app.get('/user', (req,res)=>{
    res.render('pages/user', {userfirstname: cookie.firstname});
});



const PORT = process.env.port || 3000;

app.listen(PORT, ()=>{
    console.log(`listening at locçalhost:${PORT}`);
});