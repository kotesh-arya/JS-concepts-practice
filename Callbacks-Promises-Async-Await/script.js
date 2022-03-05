//Callback functions

 const mainFunc = (user,callBackFunction) => {
     console.log(`Hey ${user}..`);
     callBackFunction();
 }
const callBackFunction = () => {
    console.log("I am from the call back function!")
}
mainFunc("kotesh",callBackFunction);

//Async-Await

let greet = async (user1)=>{
return `Hello ${user1}`
}
 let result =greet("kotesh");
 console.log(result);

 //// second example using async- await as a syntactic sugar over promises.

 async function showAvatar() {

    // read our JSON
    // let response = await fetch('/article/promise-chaining/user.json');
    // let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/kotesh-arya`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
  
  
    return githubUser;
  }
  
  showAvatar();