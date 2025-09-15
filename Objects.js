let user = {
    name : "seif",
    age : 20,
    skills : ["python", "SQL server", "JS", "mongoDB"],
    greek : ()=> `Hello ${user.name}`
}


console.log(user)
console.log(user.skills.join(" | "))
console.log(user.greek())


//create user with New Object constractor

let newUser = new Object({
    name : "Ahmed",
    age : 33,
    skills : ["python", "SQL server", "JS", "mongoDB"],
    greek : ()=> `Hello ${user.name}`
})

console.log(newUser.age)