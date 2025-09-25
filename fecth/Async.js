// let data = ["seif", "ashraf", "elsayed", "elboghdady"];
// async function getData (arr){
//     if(data.length > 0){
//         return `User Found`
//     }
//     else{
//         throw new Error (`Users not found`)
//     }
// }

// console.log(getData(data))

// getData(data).
// then(
//     (resolve)=>{
//         console.log(resolve);
//     },
//     (reject)=>{
//         console.log(`Rejected ${reject}`);
//     })

//==============================================================================================//

// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         // resolve(`this statemen went from promise`);
//         reject(Error(`This statment is Errorrr .....!!!`))
//     }, 5000);
// })

// async function test(){
//     console.log(`this is before promise`);
//     // console.log( await myPromise)
//     console.log(await myPromise.catch((err)=> err))
//     console.log(`this is after statment`);
// }

// test()