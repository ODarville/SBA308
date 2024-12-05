// JavaScript Total Recall

// I. Variables & Datatypes

// 1.How do we assign a value to a variable?
// Answer : You can assign a value to a variable by using one of the varaible declarations. Ex : let x = 10, const = 15, var = 20(var is oldskool dont use anymore)
// 2.How do we change the value of a variable?
// Answer : You can change the value to an already declared variable, if the declared variable used let or var as its variable declaration
//          Ex:  let x = 10
//               let x = 20
// 3.How do we assign an existing variable to a new variable?
// Answer : You can assign a existing variable to a new variable if the existing variable was declared using the let or var declarations.
//          Ex: let x = 10
//              let y = x
// 4.Remind me, what are declare, assign, and define?
// Answer : Declare: Means the declaration of a varible using "const", "let", or "var"
//          Assign: Assigning is done using the "=" after declaring the variable
//          Define: Define is the process of using declare and assign togther in one line/step.
// 5.What is pseudocoding and why should you do it?
// Answer : Psuedo coding is kind of like wireframing but for js. You want to plan out your code, simplify and used best practice before drafting out your code.
// 6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// Answer : A efficient way to go about this is to spend about %80 of your time thinking about how to solve the problem and about %20 of your time actually typing in the code to solve it.

// B. Strings
// 1.Create a variable called firstVariable
let firstVariable
// 2.Assign it the value of the string "Hello World"
firstVariable ="Hello World"
// 3.Change the value of this variable to some number
firstVariable = 30
// 4.Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable
// 5.Change the value of secondVariableto any string.
secondVariable = "You wild boy"
// 6.What is the value of firstVariable?
// Answer : 30
// 7.Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. 
let yourNameand = "Owen"
let arrive = "Hello, my name is " + yourNameand
// return arrive
console.log(arrive)

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a !== b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e == 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a + a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// D. The farm
// 1.Declare a variable animal. Set it to be either "cow" or something else
// 2.Write code that will print out "mooooo" if the it is equal to cow
// 3.Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// 4.Commit

let animal = 'Zooby'
if (animal === 'cow'){
    console.log("mooooo")
} else{
    console.log("Hey! You're not a cow.")
}

// E. Driver's Ed
// 1.Make a variable that holds a person's age; be semantic
// 2.Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let testDriver = 36
if(testDriver >= 16){
    console.log("Here are the keys!")
} else{
    console.log("Sorry, you're too young.")
}

// II. Loops
// remember: USE letwhen you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// 1.Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0; i <=10; i++){
    console.log(i)
}
// 2.Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i <=400; i++){
    console.log(i)
}
// 3.Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i = 10; i <=4000; i += 3){
    console.log(i)
}

// B. Get even
// 1.Print out the numbers that are within the range of 1 - 100
for(let i = 1; i <= 100; i++){
    console.log(i)
}
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(let i = 1; i <= 100; i++){
    if (i % 2 ==0){
       console.log(i + " <--is an even number")
        } else{
            console.log(i)
        }
}

// C. Give me Five
// 1.For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// for(let i = 1; i <= 100; i++){
//     if(i % 5 === 0){
//         console.log(`I found a ${i}. High five!`)
//     }
// }

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

for(let i = 1; i <= 100; i++){
    if(i % 5 === 0 ){
        console.log(`I found a ${i}. High five!`)
    }
    else if(i % 3 === 0){
        console.log(`I found a ${i}. Three is a crowd`)
    }
}

// D. Savings account
// 1.Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let bank_account = 0;
for(let i = 1; i <= 10; i++){
    bank_account += i;
    
}
console.log(bank_account)
// 2.You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
for(let i = 1; i <= 100; i++){
    bank_account += i * 2;
    
}
console.log(bank_account)

// III. Arrays & Control flow

// A. Talk about it:
// 1.What are the things in an array called?
// Answer: Arrays contain ELEMENTS when they are created.
// 2.Do Arrays guarantee those things will be in order?
// Answer: Yes, the elements in an array will always be in order.
// 3.What real-life thing could you model with an array?
// Answer: To do list, list, Timesheets

// B. Easy Does It
// 1.Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["There can only be one","Look at me, I'm the captain now","Transitioning from fitting in to standing out"]

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// 1.How do you access the 1st element in the array?
const randomThings = [1, 10, "Hello", true]
randomThings[0]
console.log (randomThings[0]);
// 2.Change the value of "Hello" to "World"
randomThings[2] = "World"
// 3.Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1.What would you write to access the 3rd element of the array?
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2]
console.log(ourClass[2])
// 2.Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
// 3.Add a new element, "Cloud City" to the array
ourClass.unshift("Cloud City")
console.log(ourClass)

// E. Mix It Up
// note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]
// 1.Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
const myArray = [5, 10, 500, 20]
myArray.push("Aegon", "Targaryen")
// 2.Remove the 5from the beginning of the array.
myArray.shift();
// 3.Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
// 4.Remove the string of your choice from the end of the array.
myArray.pop()
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
console.log(myArray)
myArray.reverse()
console.log(myArray)
// Answer: Yes it mutated it by reversing the order in which the array was arranged.

// F. Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// 1.console.log()s "little number" if the number is entered is less than 100
// 2.console.log()s big number if the number is greater than or equal to 100.
let littleNum = 0

if( littleNum < 100){
    console.log("little number")
} else{
    console.log("big number")
}

// G. Monkey in the Middle
// 1.console.log() little number if the number entered is less than 5.
// 2.If the number entered is more than 10, log big number.
// 3.Otherwise, log "monkey".

if(littleNum < 5){
    console.log("little number")
} else if(littleNum > 10){
    console.log("BiG NUMBER")
}else {
   console.log("Monkey")
}

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1.What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence " " + the third item in Kristyn's closet + " " to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
// 2.Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6,0,"Raybans")
console.log(kristynsCloset)
// 3.Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat"
console.log(kristynsCloset)
// 4.Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// 5.In the same way, access one item from Thom's pants array.
// 6.Access one item from Thom's accessories array.
// 7.Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
let shirt = thomsCloset[0][0]
let pants = thomsCloset[1][0]
let bling = thomsCloset[2][0]
console.log(`My boy Thom out here looking fresh with ${shirt},${pants} and ${bling}`)
// 8.Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"

// IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// Like so?
function printGreeting(greeting){
    console.log(`Hello there, ${greeting}!`)
}
printGreeting("Slimer")

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
function printCool(name){
    console.log(`${name} is cool`)
}
printCool("Captain Reynolds")

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(numb){
   let cube = numb ** 3
   console.log(cube)
}
calculateCube(4)

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(vow){
    let vowels = ['a','e','i','o','u','y']
    vow == vow.toLowerCase
    if(typeof vow == vowels){
        return true;
    }else{
        return false;
    }   
}
console.log(isVowel('e'))

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(str1, str2){
    return [str1.length, str2.length]
}
console.log(getTwoLengths('Hello', "boooooooooyyyyyyyyyyyyy"))

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(str3){
    return str3.map(str3 => str3.length)
}
console.log(getMultipleLengths(['array', 'many', 'level']))

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

function maxOfThree(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1
    }else if(num2 >= num1 && num2 >= num3){
        return num2
    }else{
        return num3
    }
}
console.log(maxOfThree(2,2,2))
console.log(maxOfThree(2,2,9))
console.log(maxOfThree(10,2,2))

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function printLongestWord(words){
    let longWord = "";
    for(i = 0; i < words.length ; i++){
        if(words[i].length > longWord.length) {
            longWord = words[i]
        }
 
    }

    return longWord;
}

console.log(printLongestWord(['array', 'brother', 'mother', 'father']))

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// 1.Create an object called user
// 2.Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {
    name:"Owen",
    email: 'owen@perscholas.com',
    age: 36,
    purchased:[],
}

// B. Update the user
// 1.Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
// 2.Our user has had a birthday! Without changing the original user object, increment the agevalue using the postfix operator. Hint: age++
user.email = 'Owen@wildwildwest.com'
user.age++
console.log(user)

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// 1.Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = 'Bahamas'
console.log(user)

// D. Shopaholic!
// 1.Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// 2.Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// 3.Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// 4.Console.log just the "Merino jodhpurs" from the purchased array.
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
console.log(user.purchased[2])

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friend with a name and age, we could write:
user.friend = {
    name: "Grace Hopper",
    age: 85
}
// When we console.log user, we would see the friendobject added to our user object.
console.log(user)
// 1.Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "Bob",
    age: 38,
    location: "Miami",
    purchased:[],
}
// 2.Console.log just the friend's name
console.log(user.friend.name)
// 3.Console.log just the friend's location
console.log(user.friend.location)
// 4.CHANGE the friend's age to 55
user.friend.age = 55
console.log(user)
// 5.The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring")
// 6.The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte")
// 7.Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1])

// F.Loops
// 1.Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for(let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i])
}
// 2.Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for(let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}
// G. Functions can operate on objects
// 1.Write a single function updateUser that takes no parameters. When the function is run, it should:
// 2.it should increment the user's age by 1
// 3.make the user's name uppercase
function updateUser(){
    user.age++
    user.name = "OWEN"
}
updateUser()
console.log(user)

// The function does not need a return statement, it will merely modify the user object.
// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.


// Cat Combinator

// 1.Mama cat
// Define an object called cat1that contains the following properties:

// name
// breed
// age (a number)
const mamaCat = {
    name:"Beans",
    breed: "Calico",
    age: 2,
}
// console.log the cat's age
console.log(mamaCat.age)
// console.log the cat's breed
console.log(mamaCat.breed)

// 2.Papa cat
// name
// breed
// age (a number)
const papaCat = {
    name:"Jeans",
    breed:"Calico",
    age: 3,
}

// 3. Combine Cats!
// The cats are multiplying!
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
function combineCats(mama, papa){
    console.log(mama)
    console.log(papa)
}
const cat1 = {
        name:"Jam",
        breed:"Sphynx",
        age: 5,
    }
const cat2 = {
        name:"Jelly",
        breed: "Burmese",
        age: 3,
    }
combineCats(cat1, cat2)

// Make it so the combineCats function will return a combination of the two incoming cats
// The result should be an object wherein the
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between

function combineCats(mama, papa){
    console.log(newCat = {
        name:`${mama.name}` + `${papa.name}`,
        age: 1,
        breed: `${mama.breed}` + `${papa.breed}`
    })
}
combineCats(cat1,cat2)

// 4. Cat brain bender
// If combineCats returns an object, and if combineCatstakes objects as arguments, then it stands to reason that:
// catCombinator can use itself as its own argument.
// Take a second to stew on that . . .
// What is the result of:
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));


// the placeholder of the for of is the elements 
// the placeholder of the for in is the indexes of