console.log("kotesh");

// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const addNum = (one, two, three, four, five) => {
    let sum = one + two + three + four + five;
    console.log(sum);
}

addNum(2, 3, 4, 5, 6);

//Write a program to check a number entered by the user is even or odd 

const checkNum = (numb) => {
    if (numb % 2 === 0) {
        console.log("This is an even number")
    } else {
        console.log("It is an odd number!!")
    }
}

checkNum(6);

//Write a program to check the maximum from two numbers

const getMax = (first, second) => {
    let maxNum = Math.max(first, second);
    console.log(maxNum);
}

getMax(32323, 24223);

// maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

//Using REST PARAMETERS combined with SPREAD OPERATOR(2015) we can use the Math.max method for multiple or infinite numbers.

const getMaxMultiple = (...multipleArr) => {
    let result = Math.max(...multipleArr);
    console.log(result);
}
getMaxMultiple(2, 3, 4, 3, 22, 33, 44, 5, 444, 334, 22, 3, 43, 343433, 567, 2342, 5645);

// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

// Hint: months with 31 days  January, March, May, July, August, October, and December.

// const userInputMonth = document.querySelector(".user-input-month");
// const click = document.querySelector(".click");
// const result = document.querySelector(".result");

// const showMessage = () => console.log(userInputMonth.value);
// const monthArr = ["JANUARY", "MARCH", "MAY", "JULY", "AUGUST", "OCTOBER", "DECEMBER"];
// const checkMonth = () => {
//     console.log(userInputMonth.value.toUpperCase());
//     for (let i = 0; i < monthArr.length; i++) {
//         if (monthArr[i].includes(userInputMonth.value.toUpperCase())) {
//             result.innerHTML = "31days";
//             break; //--------------------------------------------->The crucial part 
//         } else {
//             result.innerHTML = "not a full month";
//         }
//     }


// }
// click.addEventListener("click", checkMonth);

// -------------------------------------------------------------

// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....
const convertedArr = () => {
    const mainArr = [];
    for (let i = 0; i < 100; i++) {
        mainArr.push(i);

        (mainArr[i] % 3 === 0) ? mainArr[i] = "Fizz":
            (mainArr[i] % 5 === 0) ? mainArr[i] = "Buzz" :
            (mainArr[i] % 3 && mainArr[i] % 5 === 0) ? mainArr[i] = "FizzBuzz" :
            mainArr[i] = mainArr[i];
    }
    console.log(mainArr);

}
convertedArr();


//Example 07:


//Topic: Short arrow function/Lamda function/Fat arrow function

// with no parameter
const getNum = () => 2

// ES5 function
function getNum2() {
    return 2
}

// Short arrow function with one parameter

const isOne = (num) => num == 1 //


console.log(isOne(12))

//Example 08

const isBigger = (a, b) => a > b
console.log('Is 2 bigger than 3?', isBigger(2, 3))

// How would you write this with the least amount of characters
function Add22andReturn(num) {
    let sum = 0
    sum = num + 22
    return sum
}

const sampleFunc = (num) => num + 22;

console.log(sampleFunc(8));

//Example 09

//Arrow function when there are more than 1 statement

const multiLineFunc = (a, b) => {

    console.log(a * b);
}
multiLineFunc(2, 3);

//Returning an object with values from the arguments using short arrow function  :)

const returnArr = (a, b) => ({
    first: a,
    later: b
}); // here '()' are must or else the returning object will be considered as curly braces used in multiline Arrow function.
console.log(returnArr("kotesh", "mudila"));

//Example 11

const defaultExample = (a, b) => a + b //here b will be undefined 
console.log(defaultExample(2)) // this will return NaN (2*undefined) as the second argument is not passed at the function invocation

// So here will have to set a default parameter "b = some value"
const defaultExample2 = (a, b = 5) => a + b;
console.log(defaultExample2(2));


//Example 12

const restExample = (a, ...rest) => {
    console.log(a, rest[2])
}

restExample(2, 3, 4, 5, 6, 7, 8, 9, 10);

//Example 13

const spreadExample = ({
    a,
    b
}) => {
    console.log(a, b)
}

const obj = {
    a: 1,
    b: 2
}

console.log(spreadExample(obj)) //Passed the "obj"(object) into spreadExample arrow function
// If we decode this internally we can make an assumption as below:

//  let {a:1,b:2} = {a,b};  just an example

//Example 14

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const spreadExample2 = ([first, second, ...rest]) => { // destructuring of the array thats get passed from the arguments
    console.log(first, second, rest, rest[rest.length - 1])
}

console.log(spreadExample2(array)) // passing array (array) into the spreadExample arrow function

// rest with spread
console.log(spreadExample2([...array, 11, 12, 13])) //Awesome :)

//Example 15

const spreadExample3 = ({
    a: aaloo,
    b: bhaaloo
}) => {
    // destructuring
    // console.log(a,b)
    console.log(aaloo, bhaaloo) // ---> 1  2
}

const obj2 = {
    a: 1,
    b: 2
}
spreadExample3(obj2)

//Example 16

let propKey = "First name";

const nameObj = {
    [propKey]: "kotesh"
}
let propKey2 = "Last name";

const nameObj2 = {
    [propKey2]: "Mudila"
}
console.log(nameObj);
console.log(nameObj2);

//Example 17

//   Object literals/Shorthand property value

//when the variable name and the property name of the object are same   

let aaloo = 1
let bhaaloo = 2
const obj3 = {
    aaloo: aaloo,
    bhaaloo: bhaaloo
}
console.log(obj3) // { aaloo: 1, bhaaloo: 2}
const obj4 = {
    aaloo,
    bhaaloo
}
console.log(obj4) // { aaloo: 1, bhaaloo: 2}     both gives same output So better use this shorthand property :)


//ES6 Assignments questions

let aloo = 1;
if (aloo == 1) {
    let a = 2;
    console.log(a);
}
console.log(aloo);

//

var product1 = (x, y) => x * y;
console.log(product1(3, 4));

/////

let customer = {
    user: "Bhaalo"
};
let {user} = customer;   // Object destructuring assignment

let card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
};
let {amount,product,unitprice} = card;     // Object destructuring assignment

let message = `Hello ${user} wants to buy  ${amount}  ${product} for price of ${unitprice}  per piece`;   //Template literals
console.log(message);

////

let neoG = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];

let [CEO, , mentor] = neoG;
console.log(CEO,mentor);     // Array destructuring assignment

////

let Aaloo = "Tasty";
let Bhaloo = "Cute";
let Golu = "Great";
let Obj = {
  Aaloo: Aaloo,                       // Object destructuring assignment
  Bhaloo: Bhaloo
};  
console.log({Aaloo,Bhaloo,Golu})   // :)

//


var c = 5;           //ES5
var d = 10;
console.log("Fifteen is ".concat(c + d, " and n0t ").concat(2 * c + d, ".")); 

let a = 5;
let b = 10;
console.log(`Fifteen is ${a+b} but not ${2*a+b}`);      //ES6+

/////
const sum1 = (num1, num2) => num1 + num2;
const multiply1 = (num1, num2) => num1 * num2;   //Converted to Fat arrow function

let arithmeticsObj = {
    sum: sum1,
    multiply: multiply1                     
  };                                             
  let {sum,multiply} = arithmeticsObj;     //Used object destructuring assignment
console.log(sum(2,3),multiply(2,3));

//////

let avengers = {
    operation: "Assemble",
    members: [
      {
        ironMan: "Tony Stark"
      },
      {
        captainAmerica: "Steve Rogers"
      },                                    
      {                                                       // object destructuring assignment
        blackWidow: "Natasha Romanoff"
      }
    ]
  };

let {operation, members} =avengers;

  console.log(operation, members);

  ///ES6 to ES5

  const packIt = (...args) => console.log(args)

packIt(1,2,3,5,5)      // [1,2,3,5,5] returns an array

function packIt1(a,b,c,d,e){
    console.log(a,b,c,d,e)
}
packIt1(1,2,3,5,5)   //returns passed values


//Guess the output

const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]   // here the hello() returns "Hello" , but that is replaced by "Namaste" as this experssion is array destructure assigned :)
console.log(Hello, Welcome) // the welcome stays as it is defined in the left side main Array :)

/////

const obj6 = {
    maloo : 1,
    bhallo : 2
}

const {c : maloo = [2,3,4].push(5), bhallo} = obj6   //ERROR : Identifier 'maloo' has already been declared, we cannot declare same object property twice inside the desctructuring object corrected maloo into bhallo :)

console.log(maloo)  // ---> 4  (push.5 gives the length of characters inside the variable value after pushing, as shown below)


let mowa  = [2,3,4].push(5);
console.log(mowa)  //---> 4  