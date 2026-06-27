// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }   

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const a = new User('amna', 'amna@gmail.com', '123')

console.log(a.encryptPassword())
console.log(a.changeUsername())


// Inheritance
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`)
    }
}

const b = new Teacher('Ali', 'ali@gmail.com', '123')
b.addCourse()