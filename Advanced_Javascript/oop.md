## Object Oriented in JavaScript

#Javascript and classes 
- prototype based language

## Object
- collection of properties and methods
- toLowerCase

# why use OOP?

# parts of OOP
Object literal
`
const user = {
    username: 'amna',
    loginCount: 8,
    signedIn = true,

    getUserDetails: function(){
        console.log('Got user details from database');
    }
}

console.log(user.username);
console.log(user.getUserDetails());

`

- Constructor function

- Prototypes
- Classes
- Instances (new, this)

## 4 pillars
- Abstraction --> hiding implementation (compllexity), only exposing the essential features.
- Encapsulation --> Data hiding, it prevents outside code from accidentally modifying internal data.
- Inheritance --> Reusability, allows a new class to adopt the properties and methods of an existing class.
- Polymorphism --> Allows different classes to be treated as instances of the same parent class, while still maintaining their own unique behaviour.

