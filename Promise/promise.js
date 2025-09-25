// let promise = new Promise((resolved, rejected)=>{
//   let sucess = true;
//   if(sucess){
//     resolved(`Success...?`)
//   }else{
//     rejected(`Error...!`)
//   }
// });

// promise.then(result => console.log(result));
// promise.catch(Error => console.log(Error));
// promise.finally(console.log(`Done`));
//========================================================================///


// function calc(num1, num2, op){
//   return new Promise((resolve, rejected)=>{
//     if(typeof num1 !== "number" && typeof num2 !== "number"){
//       rejected(`Error , the input must number`)
//     }else{
//       if(op == "add"){
//         resolve(`The Sum is : ${num1 + num2}`);
//       }else if(op == "mul"){
//         resolve(`The Multiple is : ${num1 * num2}`)
//       }else {
//         reject("Unknown operation!");
//       }
//     }
//   })
// }

// // using Calc
// calc("s", 2, "add")
// .then(result => console.log(result))
// .catch((error)=> console.log(error))

//==================================================//
// let names = {
//     1 : "seif",
//     2 : "ziad",
//     3 : "Ahmed"
// }
// let posts ={
//     seif : ["hello", "hello"],
//     ziad : null,//["ziad", "ziad"],
//     Ahmed : ["Good", "Google"]
// }

// function getUser(userid){
//   return new Promise((resolve, reject)=>{
//     if(!names[userid]){
//       reject(`This ID Not exists`);
//     }else{
//       resolve(names[userid])
//     }
//   })
// }

// function getPosts(name){
//   return new Promise((resolve, reject)=>{
//     if (!posts[name]){
//       reject(`This name is not have posts`)
//     }else{
//       resolve(posts[name])
//     }
//   })
// }
// function displayPosts(arrpost){

//   let j = 1
//   for (let i of arrpost){
      
//       console.log(`post${j}(${i})`);
//       j++;
//   }

// }

// getUser(2)
//   .then(user => {
//     console.log("User:", user);
//     return getPosts(user);
//   })
//   .then(posts => {
//     displayPosts(posts);
//   })
//   .catch(err => {
//     console.error(err);
//   });
//===========================================================================//
// let employees = ['seif', 'jack', 'somya', 'ali'];

// function hirring(arremploys){
//   return new Promise((resolve, reject)=>{
//     if(arremploys.length !== 4){
//       reject(Error(`The Number of employee is not 4 is ${arremploys.length}`))
//     }else{
//       resolve(arremploys);
//     }
//   })
// }

// hirring(employees)
// .then(result => {
//   console.log("loading Meeting one ...");
//   result.length = 2;
//   return result
// })

// .then((result)=>{
//   console.log("loading Meeting two ...")
//   result.length = 1;
//   return result
// })

// .then((result)=>{
//   console.log(`The Last Employee is ${result}`);
// })


//=====================================================================//

function getData(APILink){
  return new Promise((resolve, reject)=>{
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
      if(this.readyState == 4 && this.status == 200){
        resolve(JSON.parse(this.responseText))
      }else{
        reject(Error(`This API may be wrong`));
      }
    }
    xhr.open("GET", APILink);
    xhr.send()
  })
}

getData("https://api.github.com/users/seifelboghdady/repos")
.then((result)=>{
  result.length = 5;
  return result
})
.then((result)=>{
  console.log(result);
})
