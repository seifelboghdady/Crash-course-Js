let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Something went wrong.");
  }
});

promise
  .then(result => console.log(result))  
  .catch(error => console.log(error))    
  .finally(() => console.log("Done!"));  

  console.log(promise)
