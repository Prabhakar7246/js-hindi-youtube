//comparision operators in js

//Compares value only (type is ignored)
console.log(5 == 5);     // true
console.log(5 == "5");  // true
console.log(0 == false); // true (confusing ⚠️)

//Strict Equal: compares vlue + data type
console.log(5 === 5);     // true
console.log(5 === "5");  // false
console.log(0 === false); // false

//Not Equal
console.log(5 != 10);    // true
console.log(5 != "5");  // false

//Strict Not Equal
console.log(5 !== "5");  // true
console.log(5 !== 5);    // false

console.log(10 > 5);  // true
console.log(5 > 10);  // false
console.log(3 < 8);   // true
console.log(8 < 3);   // false
console.log(10 >= 10); // true
console.log(9 >= 10);  // false
console.log(5 <= 5);  // true
console.log(6 <= 5);  // false

// ****Important Confusing example for interview ****
console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log("" == 0);    // true
console.log("" === 0);   // false

console.log(false == 0); // true
console.log(false === 0); // false
 //***Rule: Always use === and !== to avoid bugs.