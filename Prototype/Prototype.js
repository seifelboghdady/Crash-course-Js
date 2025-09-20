class User {
    constructor(username, id) {
        this.u= username;
        this.id = id;
    }
}

let userOne = new User('seif', 101);
console.log(userOne.u);
console.log(User.prototype);

// Add method to prototype chain
User.prototype.helloPerson =  function() 
{ 
    return `Hello ENG/ ${this.u}`;
}
console.log(User.prototype);
console.log(userOne.helloPerson());