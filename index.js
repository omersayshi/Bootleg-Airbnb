const path = require('path');
express = require('express');
app = express();
router = express.Router();
//Now equivalent of body parser
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

app.post('/', (req,res)=>{
    const user = req.body;
    console.log(user)
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