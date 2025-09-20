class User {
    #s;
    constructor(id, name, salary) {
        this.i = id;
        this.n = name;
        this.#s = salary;
    }
    getsalary(){
        return parseInt(this.#s); 
    }
}

//create object and test private filed without get Methods
let user1 = new User(101, 'seif', '1500 LE');
// console.log(user1.s * 0.3);

//test get method
console.log(user1.getsalary() * 0.3);
