//Primitive 

//7 types : String, Number , Boolean, null, undefined,symbol,Bigint

const score =100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id ==anotherId);

const bigNumber= 3456535452356475642n



//REference (Non primitive)

// Array, Obejects, functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Prabhu",
    age :22,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof scoreValue); // number
console.log(typeof BigInt);    // function
console.log(typeof outsideTemp);// object
console.log(typeof isLoggedIn);//boolean
console.log(typeof userEmail);//undefined
console.log(typeof id);       //symbol
console.log(typeof myFunction);// function  



