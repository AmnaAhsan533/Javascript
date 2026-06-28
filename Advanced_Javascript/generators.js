// Generators (the modern way of iterators)

//All elements of array stored in elements
// But in generators we get the desired value on the fly
// Every generator object is an iterator 

function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// next allows us to execute the code inside the generator function until it reaches a yield statement. 
// Each time we call next, the generator resumes execution from where it left off and continues until it hits the next yield or returns.

const generatorObj = simpleGenerator() // set up the generator object
console.log(generatorObj.next())

// Usecases
// Infinite Loop e.g ID generator
// Iterator

const myArray = ['apple', 'banana', 'cherry'];

function Iterator(array){
    let nextIdx = 0;
    return { // returning an object
        next: function(){
             if(nextIdx < array.length){
                return {
                    value: array[nextIdx++],
                    done: false
                }
             }
             else{
                return {
                    done: true
                }
             }
        }
    }
}

// Using the itertor
const fruits = Iterator(myArray)
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())
