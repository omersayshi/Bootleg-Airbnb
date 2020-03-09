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
        console.log("Its a guest");
    }else if(who == 'host_id'){
        
    }else if(who == 'employee_id'){

    }else{
        console.log("Who are you? You are not employee, guest or host loool")
    }
    console.log(Object.keys(user)[0] == 'guest_id')
});

//laura doing funky shit here i hope it doesnt mess everything up
$('#userTypeList').change(function() {
    if(this.value == "Host") {
        $('#host_id').show();
        $('#branch_id').show();
        $('#employee_id').hide();
        $('#manager_id').hide();
        $('#guest_id').hide();
    } else if(this.value == "Employee") {
        $('#host_id').hide();
        $('#branch_id').show();
        $('#employee_id').show();
        $('#manager_id').show();
        $('#guest_id').hide();
    } else{
    	$('#host_id').hide();
        $('#branch_id').hide();
        $('#employee_id').hide();
        $('#manager_id').hide();
        $('#guest_id').show();
    }
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