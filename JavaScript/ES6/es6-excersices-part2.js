//Excersice 1:Write a function that when 
//given an array sums only the odd values and returns that sum. Assume the array is an array of integers.*/

const sums = (arr) =>{
  sum=0;
  for(const index of arr){
    if(index%2 !=0){
      sum+=arr[index];
    }
  }
  return sum;
}

arr = [0,1,0,1,0,1];
sums(arr);

//Excersice 2: Write a JavaScript program
// to reverse the order of the characters in the string.

const revers = (str) =>{
   
  return str.split("").reverse().join("");
}
var str = "Hello";
revers(str);

/*Excersice 3: Use `const` so `x` can't change
 * 
 * Consider renaming to const convention
 * 
var x = 1; 

if( true ) {
  var x = 2; // should raise a TypeError
}

console.log(x); // 1*/

const x = 1; 

if( true ) {
  var x = 2; // should raise a TypeError
}



/* Excersice 4:  Use an ES6 Class to construct a Person instance.

function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}

var john = new Person('John', 'Doe');
var jack = new Person('Jack', 'Doe');

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(john.fname); // John*/

class Person{
  constructor(firstname , lastname){
    this.firstname = firstname;
    
  }
}


/* Excersice 4: Turn `exampleFunction` into a one line "arrow function".

var exampleFunction = function() { 
  console.log('🙌');
}

exampleFunction();*/


/*
 * Exercise 5:Make a function that takes array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/


/*
 * Exercise 6: Make a function that takes capitalize each of an array of names 
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/




/*Exercise 7: Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/




/*Exercise 8: Write a JavaScript function to find the first not repeated character. Go to the editor
Sample arguments : 'abacddbec' 
Expected output : 'e' 
*/





/*Exercise 9:Use destructuring to initialize the variables `one`, `two`, and `three` with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const one = things;
const two = '';
const three = '';

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);


/*Exercise 10:Replace the variable declarations using let or const. */
var CHARACTER_LIMIT = 255;
var posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (var i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();
