const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;
        if (operationSuccessful) {
            resolve("La operación fue todo un exito")
        } else {
            reject("La operación falló")
        }
    }, 2000)

});

promise .then((successMessage) => {
    console.log(successMessage);
})
.catch((errorMessage) => {
    console.log(errorMessage);
});
