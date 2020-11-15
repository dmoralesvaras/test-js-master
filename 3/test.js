let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            resolve("Success!");
        } else {
            reject("Fail!");
        }
    }, 1000);
});

promise
    .then((successMessage) => {
        console.log("Yes! " + successMessage);
    })
    .catch((failMessage) => {
        console.log("No! " + failMessage);
    });
    