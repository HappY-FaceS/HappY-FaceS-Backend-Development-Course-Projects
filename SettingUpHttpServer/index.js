const http=require ('http');

/**
 * Http module contains a function called createServer
 * this createServer function takes call back function as input 
 * now this callback function contains two arguement:
 * - request -> this arguement contains all the details about the incoming request
 * - response -> this arguement contains functions using which we prepare the response 
 */


const server = http.createServer(function exec(request,response){
    
    /**if(request.url=='/dob')
    {
        response.end("12 OCT 2001");
    }
    if(request.job=='/job')
    {
        response.end("aspiring Software Engineer");
    }
    */
     response.end("Welcome Rishav");
});
// port : 4000
server.listen(4000, function process() {
    console.log("Server started");
})