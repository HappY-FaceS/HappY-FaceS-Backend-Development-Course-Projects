const express = require('express');
const bodyParser = require('body-parser');

const app=express();

const PORT=3100;


//To access the request body of POST request

// middleware implemention using body-Parser package
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


let blogsList=[];

app.get('/blogs',(req,res)=>{

    // console.log(req.body); 

    return res.json({
        data: blogsList,
        success:true,
        code:200

    });
});

app.post('/blogs',(req,res)=>{

    /**
     when a client sends a POST request to a server, the data sent in the request body is not immediately accessible to the server. This is because the request body is transmitted separately from the HTTP headers that contain metadata about the request.

     To access the data in the POST request body, the server needs to read the request body. This is typically done using a server-side programming language or framework that provides methods for reading and parsing the request body.

     console.log(req.body); // undefined
     */

     blogsList.push({title: req.body.title, content: req.body.content , id:Math.floor(Math.random()*1000)});
     return res.json({
        success:true,
        code:200

     });
});


app.get('/blogs/:id', (req,res)=>
{
    // filter function is in JS
    const result =blogsList.filter((blog)=>blog.id==req.params.id);
    return res.json({
        data:result,
        success:true,
        code:200
    });
});


app.delete('/blogs/:id',(req,res)=>
{
    const ID = parseInt(req.params.id);
    const index=blogsList.findIndex((blog) => blog.id == ID);
    if (index !== -1) {
        blogsList.splice(index, 1);
        return res.send(`Resource with ID ${ID} has been deleted`);
      }

      return res.status(404).send('Resource not found');
});

app.listen(PORT,()=>
{
    console.log("Server started on ", PORT);
});


// start server using "npm start"