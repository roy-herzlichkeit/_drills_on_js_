setTimeout(() => {
    console.log(1000);
}, 10000);

setTimeout(() => {
    for (i = 995; i < 1000; i++)
        console.log(i);
}, 10001);