const foo2 = (text) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 2000);
    });
    return promise;
};

console.log("START");

setTimeout(() => {
    console.log("TIMEOUT is DONE");
    foo2().then(done => {
        console.log(done);
        return foo2().then(done => {
            console.log(done + " again");
        });
    })
})