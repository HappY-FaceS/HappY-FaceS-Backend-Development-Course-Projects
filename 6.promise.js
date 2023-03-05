// how can we write a function to download some data from a url, and not use callbacks
// instead use promises ? 
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("going to start the download");
        setTimeout(function process() {
            let data = "Dummy downladed data";
            console.log("download completed");
            resolve(data);
        }, 10000);
        console.log("Timer to mimic download started");
    });
}

console.log("Starting the program");
console.log("We are expecting to mimic a downloader");
x = fetchData("www.google.com");
console.log("New promise object created successfully, but downloading still going on");
console.log(x);

function fetch1(url) {
    return new Promise(function (resolve, reject) {
        // any logic
        for(let i = 0; i < 10000000000; i++) {
            // some task
        }
        console.log("Completed");
        resolve("sanket");
    });
}