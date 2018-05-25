const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload');

const appConstants = require('./appConstants.json')//extension for json file, not for JS

const app = express();//create instance of express application

app.use(cors());//Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
app.use(bodyparser.json());//parses JSON
app.use(bodyparser.urlencoded({
	extended:false//false when vlue is string or array, true for anyother type
}));
app.use(fileupload());

app.listen(appConstants.PORT);

console.log('Server Started')