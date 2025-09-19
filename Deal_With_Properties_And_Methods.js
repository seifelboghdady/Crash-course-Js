//can add static keyword to 
class User {
    static count = 0
    constructor(fName, lName, age, salary, DOB) {
        this.fName = fName;
        this.lName = lName || 'Unknow';
        this.age = age;
        this.salary = salary<600 ? salary+500 : salary;
        this.DOB = DOB;
        this.msg = function(){
            return `Hello ${this.fName} your Salary is ${this.salary} and your Age is ${this.age}`
        }
        User.count++;
    }
    writemsg(){
        return `Hello ${this.fName} your Salary is ${this.salary} and your Age is ${this.age}`
    }
    count_instance(){
        return `The Count Instance is ${User.count}`
    }
}

let seif_1 = new User('Seif','Elboghdady',20 ,15000, '21/06/2005');
let ziad_2 = new User('Ziad','Elboghdady',19 ,0 , '12/05/2006');
let ashraf_3 = new User('Ashraf','Elboghdady',46 ,30000, '06/01/1985');
let ahmed_4 = new User('Ahmed','' ,46 , 599, '06/01/2006');

console.log(ahmed_4.fName);
console.log(ahmed_4.lName);
console.log(ahmed_4.age);
console.log(ahmed_4.salary);
console.log(ahmed_4.DOB);
console.log(ahmed_4.msg());
console.log(ahmed_4.msg);

console.log(ahmed_4.writemsg());
console.log(ahmed_4.writemsg);

console.log(User.count)

