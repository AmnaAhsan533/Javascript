// Destructing, Spread and Rest Operators

const person = {
    name: 'Amna',
    age: 20,
    city: 'Karachi'
};

const {name, age} = person
console.log(name); // Output: 'Amna'
// console.log(person.name); // without destructuring, we would have to access the name property using person.name. 
// But with destructuring, we can directly access the name property by using the variable name.

const myArray = ['apple', 'banana', 'cherry'];
const [first, second] = myArray;

console.log(first); // Output: 'apple'
console.log(second); // Output: 'banana'

// the first two elements are assignes to the varibles, here we destructure the array and assign the first two elements to the variables first and second. 
// The rest of the elements are ignored.

// Spread Operator ...
const defaults = { color: 'blue', size: 'medium'}
const product = {...defaults, price: 100, name: 'T-shirt'}
console.log(product)

const nums = [1, 2, 3, 4, 5]
const moreNums = [...nums, 6, 7]
console.log(moreNums)

//Rest operator

const sum = (...nums) => { //if we don't know how many arguments will be passed to the function, we can use the rest operator to collect all the arguments into an array.
    let total = 0;
    nums.forEach(num => total += num)
    return total
}

console.log(sum(1, 2, 3, 4, 5)) // Output: 15
console.log(sum(10, 20, 30)) // Output: 60

// Optional chaining operator (?.) allows us to access properties of an object without having to check if the object is null or undefined.

const user = {
    id: 101,
    username: "amna",
    fullName: {
        firstName: "Amna",
        lastName: "Ahsan"
    },
    roles: ["admin", "user"]
};// User A has a complete profile
const userA = {
  name: "Amna",
  profile: {
    address: { city: "Karachi" }
  }
};

// User B hasn't filled out their address yet
const userB = {
  name: "Sara",
  profile: {} 
};

// This works fine for userA
console.log(userA.profile.address.city); // "Karachi"

// This CRASHES the app for userB!
//console.log(userB.profile.address.city); 
// TypeError: Cannot read properties of undefined (reading 'city')

// Safe navigation
const cityA = userA?.profile?.address?.city; // "Karachi"
const cityB = userB?.profile?.address?.city; // undefined (No crash!)

console.log(cityB); // undefined
