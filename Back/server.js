const express = require('express');
const config = require('./config');
const cors = require('cors');
const app = express();

const port = config.port

app.use(express.json());
app.use(cors());
app.use((error,req,res,next)=>{
    res.send("Message of Error")
})

console.log(config);

app.listen(port,()=>{
    console.log(`listening on port number is ${port}`)
});