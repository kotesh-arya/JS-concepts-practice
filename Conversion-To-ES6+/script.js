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

        (mainArr[i] % 3 === 0) ?mainArr[i] = "Fizz":
            (mainArr[i] % 5 === 0) ? mainArr[i] = "Buzz" :
             (mainArr[i] % 3 && mainArr[i] % 5 === 0) ? mainArr[i] = "FizzBuzz" :
              mainArr[i] = mainArr[i];
    }
    console.log(mainArr);

}
convertedArr();

// if (mainArr[i] % 3 === 0) {
//     mainArr[i] = "Fizz";
// } else if (mainArr[i] % 5 === 0) {
//     mainArr[i] = "Buzz";
// } else if (mainArr[i] % 3 && mainArr[i] % 5 === 0) {
//     mainArr[i] = "FizzBuzz";
// } else {
//     mainArr[i] = mainArr[i];
// }