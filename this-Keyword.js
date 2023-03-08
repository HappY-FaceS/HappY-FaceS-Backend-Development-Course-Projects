/** 
  With regular functions, the value of this is determined by how the function is called. When a regular function is called as a method of an object, this refers to the object that the method is called on. When a function is called without a context object, this refers to the global object (or undefined in strict mode).
  
  
  With arrow functions, however, the value of this is determined by the surrounding context or lexical scope. When an arrow function is called, this is set to the value of this in the surrounding code.

*/


var obj = {
    name: "Sanket",
    company: "Google",
    display: () => {
        console.log(this.name, "works in", this.company); // output 1
    }
}

var obj1 = {
    name: "JD",
    company: "Microsoft",
    display: () => {
        setTimeout(() => {
            console.log(this.name, "works in", this.company); // output 3
        }, 3000);
    }
}

var obj2 = {
    name: "Sarthak",
    company: "Phonepe",
    display: function () {
        console.log(this); // output 2
        setTimeout(() => {
            console.log(this.name, "works in", this.company); // output 4
        }, 3000);
    }
}
obj.display();
obj1.display();
obj2.display();