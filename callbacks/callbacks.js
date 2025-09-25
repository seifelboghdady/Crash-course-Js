// function hello(name){
//     console.log( `hello Eng : ${name}`);
// }

// function processName(hello){
//     let name = 'seif';
//     hello(name);
// }

// processName(hello);

///=================================================================////
// function add(num1, num2){
//     console.log(`The Sum is : ${num1 + num2}`);
// }
// function mul(num1, num2){
//     console.log(`The Multiple is : ${num1 * num2}`);
// }

// function calc(num1, num2, func){
//     func(num1, num2);
// }

// calc(2, 4, mul);
// calc(1, 10, add);
//==================================================================///

// let names = {
//     1 : "seif",
//     2 : "ziad",
//     3 : "Ahmed"
// }
// let posts ={
//     seif : ["hello", "hello"],
//     ziad : ["ziad", "ziad"],
//     Ahmed : ["Good", "Google"]
// }

// function getUser(userId, callback){
//     setTimeout(()=>{
//         callback(names[userId])
//     }, 2000)
// }

// function getPosts(name, callback){
//     setTimeout(()=>{
//         callback(posts[name])
//     }, 1000)
// }

// function displayPosts(arrPost){
//     let j = 1
//     for (let i of arrPost){
        
//         console.log(`post${j}(${i})`);
//         j++;
//     }
// }

// //callback funcation
// getUser(1, (name)=>{
//     getPosts(name, (arr)=>{
//         displayPosts(arr)
//     })
// })
///===================================================///

let books = {
    1: "JavaScript Basics",
    2: "Node.js Guide",
    3: "Async Programming"
};

let reviews = {
    "JavaScript Basics": ["Great book!", "Very helpful"],
    "Node.js Guide": ["Too advanced", "Excellent reference"],
    "Async Programming": ["Confusing but good", "Loved it!"]
};


function getBook(id, callback){
    
    setTimeout(()=>{
        console.log("Loading books...");
        if(books[id] == undefined){
            console.log(`Error: this id not exist`);
            return
        }
        callback(books[id]);

    }, 2000)
}

function getReviews(bookTitle, callback){
    
    setTimeout(()=>{
        console.log("Loading reviews...");
        if(reviews[bookTitle] == undefined){
            console.log(`Error: this id not exist`);
            return
        }
        callback(reviews[bookTitle]);

    }, 1500)
}

function displayReviews(reviews){
    let j = 1;
    for(let i of reviews){
        console.log(`Review ${j} : ${i}`);
        j++;
    }
    console.log(`Done !`);
}

//callbacks

getBook(2, (bookTitle)=>{
    getReviews(bookTitle, (reviews)=>{
        console.log(bookTitle)
        displayReviews(reviews);
    })
})

// getBook(4, (bookTitle)=>{
//     getReviews(bookTitle, (reviews)=>{
//         displayReviews(reviews);
//     })
// 

///===========================================================================///