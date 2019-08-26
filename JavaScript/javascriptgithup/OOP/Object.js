
console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

var person ={
  name:{
   first:"Raghad",
   last:"Aladwan",
  },

 age:22,
 dob:49-4-1997,
 favoriteFood:['Mansaf','food','food2'],
 favoriteMovie:['M','M','M','M','M']

};

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
var persons = [
  { 
    name:
     { 

    first: 'John',

    last: 'Hob'

     },

    age: 35 
  },

  { name: { first: 'Aljhvhgvhgex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

function firstName(persons)
{
  for(i=0;i<persons.length;i++)
  {
  console.log( persons[i].name.first);
  }


}

firstName(persons);

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/
function averageAge(persons)
{ var i;
  var sum=0;

  for(i=0;i<persons.length;i++)
  {
   sum+= persons[i].age;
  }
  console.log(sum/i);

}
averageAge(persons);


/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/
// function olderPerson(persons)
// {
//   var i=0;
//   var max=persons[0].age;
   
//   while(max<persons[i].age)
//   {
//     max=persons[i].age;

//      i++;
//      console.log(persons[i].name.first);
//   }
// }
// olderPerson(persons);

function olderPerson(persons)
{
  var  s=persons[0].age,full;
  
  for(i=0;i<persons.length;i++)
  {
   
    if(s<persons[i].age)
    {
       s=persons[i].age;
        full=persons[i].name.first+' '+persons[i].name.last;
    }
    
  }
  console.log(full);
}
olderPerson(persons);
/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(persons)
{
  var fullN;

  var long = persons[0].name.first.length + persons[0].name.last.length;
   
     for(i=0;i<persons.length;i++)
      {
          if(long < persons[i].name.first.length + persons[i].name.last.length)
          {
           long = persons[i].name.first.length+' '+persons[i].name.last.length;

           fullN= persons[i].name.first+' '+persons[i].name.last;
           
          }
      
      }

  console.log(fullN);
 
}
longestName(persons);


/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
function repeatWord(str)
{
  var arrOb=[],i,count;// use it out the scope
 
    var nStr = str.split(" ");
    // nStr = nStr.toLowerCase();
    for (i=0;i<nStr.length;i++){
      var count = 1;
      for (j=0;j<nStr.length;j++){
        if (nStr[i]==nStr[j]){
          count++;
        }
      }
      arrOb.push({word : nStr[i], value : count});
    }
  
  console.log(arrOb);
}
repeatWord("Hi how are you");

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/



/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
// function selectFromObject(obj ,arr)
// {
//   for (i=0 ;i<obj.length ;i++ )
//   {
//      if(obj[i]===arr[i])
//   }
// }

function selectFromObject(obj, arr) {
  var newObj = {};
  for (let i = 0; i < arr.length; i++) 
  {
    if (obj[arr[i]] != null)
     {
       newObj[arr[i]] = obj[arr[i]];
    }
  }
  console.log(newObj);
}

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object
Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/

function objectToArray(object) {
  var keys = Object.keys(obj);
  var newArray = [];

  for(var i = 0; i < keys.length; i++) {
    newArray.push(keys[i]);
    newArray.push(object[keys[i]]);
  }

    return newArray;
}
/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object
Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/

function arrayToObject(array){
  
  var object={};

  for(i=0;i<array.length-1;i++)
  {
   
    object[array[i]]=array[i++];
  }

  console.log(object);
}

arrayToObject(["firstName","Moh","age",24]);
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable
Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/

function onlyNumber(object) {
  var isElementNaN;
  
  for(var key in object) {
    isElementNaN = typeof(object[key]) !== 'number';

    if(isElementNaN)
      delete object[key]
  }

  return object;
}

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable
Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(object) {
  var arr = Object.keys(object);
  var newObj = {};
  for (let i = 0; i < arr.length; i++) 
  {
    if (typeof obj[arr[i]] === "string") 
    {
      newObj[arr[i]] = object[arr[i]];
    }
  }
  console.log (newObj);
}
onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]});
/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable
Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/


function onlyArray(obj) {
  var isElementNotArray;
  
  for(var key in obj) {
    isElementNotArray = Array.isArray(obj[key]);

    if(isElementNotArray)
      delete obj[key]
  }

  return obj;
}

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']
*/


function keysArray(object)
 {
  console.log( Object.keys(object));
}
 keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]});
/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]
*/

function valuesArray(obj) {
  console.log (Object.values(obj));
}
valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]});
/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
let object ={ a:1 , b:3 , c:4}

delete object.b;
object.a=4;
object.c=66;

console.log(object);

/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object
Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(object) {
  console.log(Object.keys(object).length);
}

keysArray({a:1,b:2,c:3,d:4});



/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even
Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(object)
{
  nobj = {};
  for(x in object)
  {
    if(object[x]%2==0)
    {
          nobj[x]=object[x];
    }
  }
  console.log(nobj);
}
evenValue({a:1, b:2, c:3, d:4});

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key
Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
function longestKey(obj) {
  var keys = Object.keys(obj);
  
  var key = keys[0];
  var maxKeyLenth = keys[0].length;
  var valueMaxKey = obj[0];

  for(var i = 1; i < keys.length; i++) {
    if(maxKeyLenth < keys[i].length) {
      key = keys[i];
      maxKeyLenth = keys[i].length;
      valueMaxKey = obj[key];
    }
  }

  return valueMaxKey;
}