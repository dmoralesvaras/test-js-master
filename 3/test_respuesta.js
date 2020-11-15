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



/***********************************/
// Test 3.1
Podemos utilizar un Polyfill para hacer que el código de promesas funcione en Iexplorer, por ejemplo https://babeljs.io/docs/usage/polyfill/
o este otro https://github.com/stefanpenner/es6-promise
Se instalaría la librería o se puede llamar por CDATASection.
En este caso, lo podemos incorporar en la página html como un CDN llamando al script de forma remota para probarlo y funciona.


<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>


No obstante, en este caso, como la ejecución es sencilla también la podemos dejar sin promesas, con código que no de problemas en ningún navegador.

setTimeout(function () {
    if (Math.round(Math.random()) === 1) {
        responde(true,"Success!");
    } else {
        responde(false,"Fail!");
    }
}, 1000);

function responde (succes, message) {
    if (succes){
        console.log("Yes! " + message);
    }else {
        console.log("No! " + message);
    }
}

/***********************************/    