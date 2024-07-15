/*
Exercise 1: Define an empty array
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array
*/
foods. push ('pizza', 'cheeseburger')

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning
*/
foods.unshift("taco");
     
console.log('Exercise 3 result:', foods);
/*
Exercise 4: Access an array element
*/
const favFood = foods[1]; //why is it putting cheese burger

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

*/

foods.splice(2, 0 , "tofu");
console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements
*/

foods.splice(1,1,'sushi', 'cupcake');

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

*/

const yummy = foods.slice(1,3);

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

*/

soyIdx = foods.indexOf("tofu")

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

*/

allFoods = foods.join(' -> ');

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

*/

hasSoup = foods.includes('Soup')

console.log('Exercise 10 result:', hasSoup);

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = nums.filter((num) => num % 2 === 1);

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays


*/ 

const buzz = [] 
const fizz = []
const fizzbuzz = []

for (let num of nums) {
    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num);
    }
    else if (num % 3 === 0) {
        fizz.push(num);
    }
    else if (num % 5 === 0){
        buzz.push (num);
    }
};


console.log('Exercise 12 Results:');
console.log('fizz:', fizz);
console.log('buzz:', buzz);
console.log('fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length -1];

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

*/

const num = (numArrays [2][1])


console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

*/
total = 0;
numArrays.forEach(function(n){
    n.forEach(function(value) {
        total += value;
    })

});

console.log('Exercise 15 result:', total);

