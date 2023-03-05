function fun(x,fn)
{
    // n is number 
    // fn is call back function
    fn();
    console.log("3101");
    for(let i=0;i<x;i++)
    {
        console.log(i);
    }
    fn(); // calling the callback funcion passed
}


fun(10,function log(){
    // this is a callback function
    console.log("rishav");
});
setTimeout(function log(){
    console.log("kumar");
},5000);

// set function returns always return a unique id which helps us to end the timer using clearInternal 
let id =setInterval(function log(){
    console.log("Good morning");
},2000);


setTimeout(function(){
    clearInterval(id);
},15000);
