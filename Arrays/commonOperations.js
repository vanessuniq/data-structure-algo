const fruits = ['mango', 'banana', 'orange', 'raisin'];
// Accessing element (set/get) or fast lookup O(1)

// get banana
console.log(fruits[1]); // banana
// set or update banana with guava
fruits[1] = 'guava' // guava
console.log(fruits); // (4) ['mango', 'guava', 'orange', 'raisin']

// Adding and removing item at the end O(1)
fruits.push('apple') //adding apple to the end of fruit
console.log(fruits); // (5) ['mango', 'guava', 'orange', 'raisin', 'apple']

fruits.pop(); //removes the last element of fruits and returns it
console.log(fruits); // (4) ['mango', 'guava', 'orange', 'raisin']

// Inserting an item with unshift() or splice () O(n)

/* The tradeoff of sequential arrangement of the array is that if we want to insert an item at
    any position other than the end of the array, we have to to shift and re-index each item after it 
    in the array 
*/
fruits.unshift("cherry"); // adding an item at the beginning of the array
console.log(fruits); // (5)  ['cherry', 'mango', 'guava', 'orange', 'raisin']

fruits.splice(1, 0, 'clementine'); // add clementine at index one, shifting the other elements
console.log(fruits) // (6)  ['cherry', 'clementine', 'mango', 'guava', 'orange', 'raisin']

// Removing an item with shift() or splice () O(n)
/* similar to insertion, it requires the re-indexing of elements comming after the deleted item */

fruits.shift() // removes and returns the first element of the array
console.log(fruits) //(5) ['clementine', 'mango', 'guava', 'orange', 'raisin']

fruits.splice(1, 1); // removes the element at index 1 (mango)
console.log(fruits) // (4) ['clementine', 'guava', 'orange', 'raisin']

// Iteration methods O(n)

// forEach(): execute a callback fuction on elements
fruits.forEach(fruit => console.log(fruit)) // will print every fruit in fruits array

// map(): copy or transform elements of an array and returns a new array
fruits.map(fruit => fruit + 's') // => (4) ["clementines", "guavas", "oranges", "raisins"]

// find(): search the array and return the first element meeting the condition given in the callback function
fruits.find(fruit => fruit === 'orange') // will return orange if found in the array, otherwise returns undefined

// filter(): search the array and returns a new array containing all the elements meeting the given condition in the callback function. Returns an empty array if none found.
fruits.filter(fruit => fruit[2] === 'a') // => (2) ["guava", "orange"] (fruit which third character is 'a')

// reduce(): applies a reducer function to elements and return a single value
fruits.reduce((string, fruit) => string + fruit[0], ''); // => "cgor" (this accumulate the first character of each fruit to a single string)

// some(): returns true if at least one element meets the condition given in the callback, otherwise false
fruits.some(fruit => fruit[0] === 'b'); // => false (no fruit in the array starts with b)

// every(): returns true if all elements meet the condition given in the callback, otherwise false
fruits.every(fruit => fruit[0] === 'c'); // => false

// reverse(): will reverse the order of elements in an array
fruits.reverse(); // => (4) ["raisin", "orange", "guava", "clementine"]
console.log(fruits); // (4) ["raisin", "orange", "guava", "clementine"]

// copying elements of array into a new array O(n)
const copy1 = fruits.concat();
const copy2 = [...fruits];
const copy3 = fruits.slice();
console.log(copy1); // (4) ["raisin", "orange", "guava", "clementine"]
console.log(copy2); // (4) ["raisin", "orange", "guava", "clementine"]
console.log(copy3); // (4) ["raisin", "orange", "guava", "clementine"]

// sorting an array O(n log n)

fruits.sort((a, b) => a.length - b.length); // (4) ["guava", "raisin", "orange", "clementine"]
// ordered the fruit by string length, smallest to largest.