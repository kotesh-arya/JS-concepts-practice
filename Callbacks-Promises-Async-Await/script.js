//Callback functions

//  const mainFunc = (user,callBackFunction) => {
//      console.log(`Hey ${user}..`);
//      callBackFunction();
//  }
// const callBackFunction = () => {
//     console.log("I am from the call back function!")
// }
// mainFunc("kotesh",callBackFunction);

//Promises ( learnt From Level-0 lecture)

function showResult() {
    const url = "https://api.github.com/users/kotesh-arya";
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(`The error obtained  is ${error}`))
}

showResult();
//Async-Await

// let greet = async (user1)=>{
// return `Hello ${user1}`
// }
//  let result =greet("kotesh");
//  console.log(result);   check about this later at free time :)

//// second example using async- await as a syntactic sugar over promises.

async function showGithubUserData() {

    // read our JSON
    // let response = await fetch('/article/promise-chaining/user.json');
    // let user = await response.json();


    // show the avatar
    // let img = document.createElement('img');
    // img.src = githubUser.avatar_url;
    // img.className = "promise-avatar-example";
    // document.body.append(img);

    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/kotesh-arya`);
    let githubUser = await githubResponse.json();

    console.log(githubUser);
    console.log(`login-ID - ${githubUser.login}`);
    console.log(`location - ${githubUser.location}`);
    console.log(`avatar_url - ${githubUser.avatar_url}`);
    console.log(`Blog - ${githubUser.blog}`);
    console.log(`Bio - ${githubUser.bio}`);
    console.log(`Twitter-Username - ${githubUser.twitter_username}`);

}
showGithubUserData();

/// Error Handling for aync-await

const giveData = async () => {
    try {
        let response1 = await fetch('https://api.wgithub.com/users/kotesh-arya');
        let data1 = await response1.json();
        console.log(data1);
    } catch (error) {
        console.log(`the error is ${error}`);
    }
}
giveData();

///Async Exercises

//EX2 - challenge

const strLength = (text, callBackFunc) => {

    let charLength = text.length; //deriving the length if text passed in the main function itself as they way asked.
    callBackFunc(22);    // passing the derived character length value  (IMP: whatever the value we pass into this argument, that will be used by the callbackfunction (nameLength))   :)
}
const nameLength = (charLength) => {
    console.log(`Your name is ${charLength} char long`);   

}
strLength('kotesh', nameLength);

//Ex-3 challenge

const willThanosKillYou =(yourName , alive, dead) => {
    if (yourName.length%2 === 0){
        alive();
    }else{
        dead();
    }
}
 const alive = () => {
     console.log(`Yay! you are alive`)
 }
 const dead = () => {
    console.log(`Give my phone to my sister :(`)
}
willThanosKillYou('kotes',alive,dead);


 const displayNameWithDelay = (message, delay) =>{  //this main function simply pass the parameters into setTimeout
    setTimeout(()=>{ console.log(message)},delay);  //passing the exact parameters into setTimeout and utilising them ready for future calling of the main function with argument values given by the user
 }

displayNameWithDelay('kotesh',3000);

setTimeout(()=>{console.log(A)},0);
setTimeout(()=>{console.log(B)},0);  //all of these gives out undefined
setTimeout(()=>{console.log(C)},0);


//Ex-6.1

const printOftenWithDelay = (message,delay)=>{
  setInterval(()=>console.log(message),delay)
}
printOftenWithDelay("vimal",1000);    

//Homework question FAANG

//Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!" ← The important question is sometimes asked in FAANG interviews as well.

// const simpleFunction = (digit,)    // do it later

//Ex-7 : onClick in React

// 7.1 ,7.2 do later for sure 


 //session watched upto 1:05:36  