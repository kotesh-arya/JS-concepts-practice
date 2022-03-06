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

///