let arr=[1,2,3,4,5];
let temp=arr.map(function process(v,i){
    /**
     * v->value
     * i->index
     * use of the Array.prototype.map() method in JavaScript to create a new array based on the elements of an existing array.
     */
    // console.log(v,i);
    return v*v;
    
})
console.log(arr);
console.log(temp);
