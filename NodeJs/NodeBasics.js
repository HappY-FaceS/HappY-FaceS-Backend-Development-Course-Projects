 //global objects in NodeJs


// interact with the environment in which your Node.js application is running, including access to command line arguments, environment variables, and system resources.
console.log(process);

// represents the name of the directory that currently contains the running Node.js script. but can't be used always 
console.log(__dirname); 

// is a object that provides access to global variables and functions throughout the entire application using 
// module.export = {variable/functionName}; 
// require('variable/functionName');
// import _ from _
console.log(module);