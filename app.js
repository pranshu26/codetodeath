var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate');
var registerController=require('./controllers/register');
var downloadController=require('./controllers/download');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.post('/controllers/register', registerController.register);
app.post('/controllers/authenticate', authenticateController.authenticate);
app.get('/controllers/download',downloadController.download);
app.listen(8012);
