console.log("hello kotesh");


//Higher order function in functional programming

function adjectifier(adjective) {
    return function (text) {
        return `${adjective} ${text}`
    }
};
let nightifier = adjectifier("dark");
const result = nightifier("man");
console.log(result);

let roomsArr = ["h1", "h2", "h3", "h4"];



let modifiedRooms = roomsArr.map((room => {
    if (room === "h3") {
        return "hx"
    } else {
        return room
    }
}))


console.log(modifiedRooms); // manipulated copy of main array
console.log(roomsArr); //Main  array

//Non-functional approach of a variable concatination with a string 

let user = "kotesh";
let greet = `hey! ${user}`;

console.log(greet);

//Functional approach for the above greet program

const greet1 = (user2) => {
    return `Hey! ${user2}dude` //instead of using the variable from the other line, we are using a function to pass the value into it using arguments and parameters and returnin our desired output by using that passed value  :)
}
let result1 = greet1("kotesh-mudila");
console.log(result1);

const greetWithDouble = (husband, wife) => {
    return `hey MR ${husband} & Mrs ${wife}`
}
const result3 = greetWithDouble("Nibba", "Nibbi");
console.log(result3);

const fruitArr = ["apple", "orange", "banana", "mango", "grapes"];

// --------------------NOT ACCEPTABLE - AS IT(for-loop and other loops) MUTATES THE ARRAY INTO INDIVIDUAL ITEMS ------------
for (let i = 0; i < fruitArr.length; i++) {
    console.log(fruitArr[i].split("").join("-")); //Do not do this in Funtional programming 
}
// --------------------NOT ACCEPTABLE - AS IT MUTATES THE ARRAY INTO INDIVIDUAL ITEMS ------------



const slicedFruits = fruitArr.map(fruit => fruit.split("").join("-")); //Map - higher order function at its peak understanding :)))
const filteredFruits = fruitArr.filter(fruit => fruit.includes("e")); //Filter - higher order function at its peak understanding :)))
// In functional programming we basically feed these MAP, FILTER AMD REDUCE to other higher order functions and get copies of the orinal data and use that for out convenience :)
console.log(slicedFruits);
console.log(filteredFruits);
console.log(fruitArr);

let rooms = ["s1", "s2", "s3", "s4"];

let changedRooms = rooms.map(room => {
    if (room === "s1") {
        return room = "oo" // as we should not use console.log here which makes the map function impure, We should the return the data for SURE
    } else {
        return room // as we should not use console.log here which makes the map function impure, We should the return the data for SURE
    }
});

console.log(changedRooms);
console.log(rooms);

//Live session exercises

const myObj = {
    naam: "neelaveni",
    age: 25
}

let sisObj = {
    ...myObj,
    age: myObj.age - 5
}; //Used object spread-copy assignment
console.log(sisObj);

let colorsArr = ["blue", "green", "red", "pink", "white"];

let addedColourArr = [...colorsArr, "biege", "yellow"]; //Used array spread-copy assignment


console.log(addedColourArr);
console.log(colorsArr);

let person = {
    name1: "kotesh",
    age1: 24
}

const birthday = (person) => ({
    ...person,
    age1: person.age1 + 3
})

console.log(birthday(person));

const ages = [11, 22, 3, 44, 5, 66, 2, 33, 4];

const filteredAges = ages.filter(age => age > 10);

console.log(filteredAges);

const numArr = [1, 2, 3, 4, 5];
const numObj = numArr.map(item => {
    return {
        item
    }
})
console.log(numObj);


//Reduce function in the form of for loop   webdevsimplified ref

let sapmleArr = [1, 2, 3, 4, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5];
let answer = 0; //initialised the accumilator variable outside the loop so that It won't be a constant for each iteration :)
for (let i = 0; i < sapmleArr.length; i++) {
    answer = answer + sapmleArr[i]; //answer variable is accessable inside this for loop also, so we are adding each element to the answer and assigning it to the answer again so that it will be updated with new value that obtained after addition in each iteration. 
}
console.log(answer);

let digits = [1, 3, 5, 2, 22, 11, 9];

const sampleObj = {even:0, odd:0};

const reducer =(sampleObj,num)=>{
    if(num%2===0){
        return {...sampleObj, even:sampleObj.even+num}
    }else{
        return {...sampleObj, odd:sampleObj.odd+num}
    }
}
let finalResult = digits.reduce(reducer,sampleObj);
    console.log(finalResult);

// const reducer = (prevSum, currNum) => {
//     if (currNum % 2 === 0) {
//         prevSum + currNum
//     } else {
//         currNum
//     }
// }
// const last = digits.reduce(reducer, 0)
// console.log(last);

// const reducer =(prevSum,currNum)=>{
//    if(currNum%2 === 0){
//       return prevSum
//    }else{                                       //:)
//        return  prevSum + currNum
//    }
// }
//  const last = digits.reduce(reducer,0);
//  console.log(last);

//  const oddSum = (sum,num) => num%2===0 ? sum : sum+num;

//  console.log(oddSum(2,4))