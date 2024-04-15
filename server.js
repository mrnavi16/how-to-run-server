const express = require('express')
const app = express();
// require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());  //req.body
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log('listening on port 3000');
})



// thes are the command to use for this 
// npm init
// npm install epxress
// npm install nodemon

// To start the nodemon use this command 
// Open PowerShell as an administrator.
// Run the command Set-ExecutionPolicy RemoteSigned
