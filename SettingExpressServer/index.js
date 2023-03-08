const express = require('express');
// create an express app object by calling express function
const app = express();

const PORT=3000;
// first parameter of get method call is url and second parameter is callback function for the response based on the request body
app.get('/',function exec(request,response)
{
    response.send("welcome rishav : JaiShreeKrishna ...");

});

app.post('/home', function (req,res)
{
    res.send("Khabra, Muzaffarpur, bihar, India")
});

app.patch('/home',function (req,res){
    res.json({
        message : "welcome",
        DOB:"12-10-2001",
        Gender:"male",
        Job:"Aspiring Software Engineer"
    });
});

app.listen(PORT, function process()
{
    console.log("server started !");
});


