function todo(task)
{
    console.log("todo start");// second output
    setTimeout(function fun(){
        console.log("complete",task); // last output 
        // closure : now here , task variable which has initialed with "assignments" but during runtime the value of task changed to "projects". so now setTimeout will consider task="projects" and give the output accordingly
    },5000);
    task="projects";
    console.log("todo end") // third output
}
console.log("starting"); // first output
todo("assignments");
console.log("ending");// fourth output