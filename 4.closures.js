/**
 * When a function is defined inside another function, the inner function has access to the outer function's variables and parameters, even after the outer function has returned. This is because the inner function has formed a closure over the outer function's variables, meaning it has access to those variables even after the outer function has completed execution.
 */

function todo(task)
{
    console.log("todo start");// second output
    setTimeout(function fun(){
        console.log("complete",task); // last output 
        // closure : todo function has been returned  still setTimeout is able to print the output after 5 seconds , have access to todo function & it's variable parameters. that is because of closure 
    },5000);
    console.log("todo end") // third output
}
console.log("starting"); // first output
todo("assignments");
console.log("ending");// fourth output