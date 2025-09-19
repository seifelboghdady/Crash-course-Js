class User {
    constructor(id, username, Email) {
        this.id = id;
        this.username = username;
        this.Email = Email;
    }
}

class Admin extends User{
    /**
     *
     */
    constructor(id, username, Email, permation) {
        super(id, username, Email);
        this.p = permation
    }
}

class superman extends Admin{
    /**
     *
     */
    constructor(id, username, Email, permation, abbility) {
        super(id, username, Email, permation);
        this.a = abbility;
        
    }
}

//create object from class user 
let seif = new User(101, 'seifahraf', 'seifelboghdady13@gmail.com');
let eng_seif = new Admin(111, 'seifooo', 'seifelboghdady@std.mans.edu.eg');
let sup_eng_seif = new superman(112, 'ashraf', 'sdsihi@gmail.com')