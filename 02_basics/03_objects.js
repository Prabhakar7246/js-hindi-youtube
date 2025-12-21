//singleton
//Object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
     name:"Prabhu",
     "full name": "Prabhakar Chauasia",
     [mySym]: "mykey1",
     age: 18,
     location: "Deoria",
     email:"d2pk7246@gmail.com",
     isLoggedIn: false,
     lastloginDays :["Mondays", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "d2pk@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "d2pk@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
     console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
     console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

