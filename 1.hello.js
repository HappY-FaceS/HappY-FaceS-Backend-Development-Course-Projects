console.log("rishav");
var a= typeof 5; // "number"
console.log(typeof a); // return string 
a=typeof NaN;
console.log(a);
console.log(typeof a);
let x=10;
var y=20;
const z="ss3101";
console.log(x,y,z);


if(true){
    console.log(t); // accessible but gives output as undefined
    var t=10;
    console.log(t); // var can be accessible outside the block 
}
console.log(t); // 10

if(true){
    console.log(tt); // error , let only access below the block space in which it was declared
    let tt=20; // let  is only accesible within the block space in which it is defined
    console.log(tt);

}
console.log(tt); // error , let can't accessible outside blockspace


function funn()
{

    tt=11;
    console.log(tt,temp,num); // output : 11 undefined undefined 
    var temp=69;
    var num=200;
}
funn();

function fun()
{
    
    var tt=11
    console.log(tt,temp,num); // gives reference error (undeclared error )as num is not declared in the scope
    var temp=69;
    num=200;
}
fun();


// Hoisting //
// step 1 in JS is  that is declaration step where all the variable & functions have been defined i.e. gun() defined in the global scope so it is known to the code

// step 2 in JS is assigning step where assign of value to variable and excecution is performed i.e now where gun() is called it automatically gives output as "rishav" as gun() is declared in step 1 
// Hoisting : having access to varibale and function before declared//

gun(); // rishav
function gun()
{
    console.log("rishav"); // rishav
}