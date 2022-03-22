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

let sapmleArr = [1, 2, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5];
let answer = 0; //initialised the accumilator variable outside the loop so that It won't be a constant for each iteration :)
for (let i = 0; i < sapmleArr.length; i++) {
    answer = answer + sapmleArr[i]; //answer variable is accessable inside this for loop also, so we are adding each element to the answer and assigning it to the answer again so that it will be updated with new value that obtained after addition in each iteration. 
}
console.log(answer);
// --------------------------------------------------------
let digits = [1, 3, 5, 2, 22, 11, 9];
const sampleObj = {
    even: 0,
    odd: 0
};

const reducer = (sampleObj, num, index) => {
    // console.log(sampleObj)
    // console.log(index);
    if (num % 2 === 0) {
        return {
            ...sampleObj,
            even: sampleObj.even + num
        }
    } else {
        return {
            ...sampleObj,
            odd: sampleObj.odd + num
        }
    }
}
let finalResult = digits.reduce(reducer, sampleObj);
console.log(finalResult);

// --------------------------------------------------------------

//Homework questions on Reduce


const digits2 = [13, 32, 53, 100, 400, 53, 16, 57];

// numbers at odd indices are --> [32,44,16]

const oddIndexReducer = (prevSum, currNum, index) => (index % 2 === 0) ? prevSum : prevSum + currNum;
// -----------genericway(without-terinary-operator------
//  {
// //  console.log(index%2===0);
// console.log(currNum);
// //  console.log(index);
//     if (index % 2 === 0) {
//         return  prevSum + currNum 
//     } else {
//         return  prevSum
//     }
// } 
const answer1 = digits2.reduce(oddIndexReducer, 0);
// console.log(answer1);

//Biggest number in the array

const biggestReducer = (prevSum, currNum) => {
    if (currNum > prevSum) {
        return currNum
    } else {
        return prevSum
    }
}

const biggestResult = digits2.reduce(biggestReducer, 0);
// console.log(biggestResult);

// ----------------------------------------------------
const nums = [13, 32, 53, 100, 400, 53, 16, 57];
const evenOddIncrement = nums.map((digit) => {
    if (digit % 2 === 0) {
        return digit - 1
    } else {
        return digit + 1
    }
})
console.log(evenOddIncrement);

const divisibleBy10 = nums.filter((digit) => digit % 10 === 0);
console.log(divisibleBy10);
//an object with sum of all odd and even numbers

const evenOddObj1 = {
    even: 0,
    odd: 0
}

const evenOddReducer = (evenOddObj1, num) => {
    if (num % 2 === 0) {
        return {
            ...evenOddObj1,
            even: evenOddObj1.even + num
        }
    } else {
        return {
            ...evenOddObj1,
            odd: evenOddObj1.odd + num
        }
    }

}
const finalResult1 = nums.reduce(evenOddReducer, evenOddObj1);

console.log(finalResult1);
// ----------------------------------------------





const fruits3 = ["apple", "orange", "mango", "papaya", "sdsds"];

const fruitReducer1 = (acc, curr) => {
    console.log(curr.length)
    if (acc[curr.length] === undefined) {
        return {
            ...acc,
            [curr.length]: 1
        }
    } else {
        return {
            ...acc,
            [curr.length]: acc[curr.length] + 1
        }

    }

}

const fruitResult = fruits3.reduce(fruitReducer1, {});
console.log(fruitResult);










// const futObj = {
//     mona: "ee"
// }
// console.log(futObj.mona);








const fruits4 = ["apple", "orange", "mango", "papaya", "bappana"];


const finalMap = fruits4.map((item) => {
    return {
        [item]: item.length
    }
});

console.log(finalMap);

//return an array with strings having owels 
const owels = ["a", "e", "i", "o", "u"]

const fruits5 = ["apple", "orange", "mango", "papaya", "bappana"];

const matchFruits = fruits5.filter((fruit) => fruit.includes('a'));

console.log(matchFruits); //Have to make more clear in free time

//Currying function 
const GreetWithName = (user) => (greet) => `${greet} ${user}`;

console.log(GreetWithName('kotesh')("hello"));

//Composition Example
//the output of a function is used as an input fot other function

const big = (reply) => {
    return `${reply} Ramsay`
}
const reply = (text) => {
    return `${text}`
};


const compoResult = big(reply('thank you!'));
console.log(compoResult);

//This is basically using the output of reply function and using that output inside big function.

const userNameLogger = (userName) => `name is ${userName}`;
const idLogger = (id) => `ID is ${id}`;

const composedFunction = (first, second) => `the person ${first} and ${second}`;

const result7 = composedFunction(userNameLogger("kotesh"), idLogger(21614013));
console.log(result7); //:))))))))happy 



// --------------------------THE ONE HOMEWORK-------------------


const increment = (digit) => digit + 1;
const decrement = (digit) => digit - 1;
const square = (digit) => digit * digit;
const multiplyWithFour = (digit) => digit * 4;



const finalResult4 = decrement(square(increment(2))); //for definite number of functions
console.log(finalResult4);



const composeMain = (...functions) => digit =>
    functions.reduce((acc, curr) => {
        return curr(acc)
    }, digit)


const result8 = composeMain(increment, square, decrement, multiplyWithFour); // for indefinite number of functions
console.log(result8(2)); //currying done 














//Return an array which have owels inside its string items
//  const owels = ["a","e","i","o","u"]
const owelFruit = fruits3.filter((fruit) => fruit.split("").includes("a"));

// console.log(owelFruit);








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

//Exercises by Ak

// Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]

// const changeToOdd =() => arr.map(item => {

//     if (item % 2 === 0) {
//         return item + 1
//     } else {
//         return item
//     }

// })

// console.log(changeToOdd());


// 2. Given an array. ****Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.


// const arr2 = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
//  const filteredLessEven = arr2.filter(digit=> digit<8 && digit%2==0);
// console.log(filteredLessEven);