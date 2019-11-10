var express = require('express');
var app =  express();
console.log('Inside app.js ',express,app);
app.get('/',(req,res)=>{
res.send('Hello world');
})

app.listen(7000,()=>{
    console.log('listening to port 7000');
});