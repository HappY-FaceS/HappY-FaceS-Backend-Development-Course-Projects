export function linearSearch(arr, x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) {
            return i;
        }
    }
    return NaN;
}

export function binarySearch(arr, x) {
    // some impl
}
console.log("Ending searching");

export default function fun()
{
    console.log("fun");
}
