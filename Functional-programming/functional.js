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
       if(room === "h3"){
           return "hx"
       }else{
           return room
       }
   }))


console.log(modifiedRooms);
console.log(roomsArr);












//  console.log(firstSet(roomModifyFunc()));

// const roomModifyFunc = ()=>{
//              roomsArr.map(room => room+"hi")
//          }
//          console.log(roomModifyFunc);

//          function sample (){
//                roomsArr.map(room => console.log(room+"hi"))
//          };
// sample();