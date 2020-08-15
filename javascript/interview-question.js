// Truthy and Falsy values

// 1. If the condition value is 0 then it's show the condition is false
// 2. Empty String "" return value false
// 3. let name; this name vairable has no value and it's a undefine variable and this undefine return false

// 4. If the value is null then the result return false
// 5. NaN should return false

/*
FALSE
------
0
""
undefined
null
NaN
false
*/

/*
TRUE

"0"
" "
[]

*/



const name = ""
const age = 4;
if(name.length > 0){
    console.log("Condition is true.");
}
else{
    console.log("Condition is false");
}

// Null Vs Undefined, different ways you will get undefined

// 1. when variable value is empty it's return undefined
// 2. inside a function when don't return the result then Undefined
// 3. inside a function when write only return but not assign the variable it's show undefined
// 4. indside a funciton parameter when you don't give a parameter value it's show undefined
// 5. inside a object when you don't declare a property but seeking the unknown property result it's show undefined

//6. 

let pakhi;

function add(num1, num2){
    console.log(num1 + num2);
}

const result = add(34, 56);

const premik = {
    name: "joney",
    phone: "0123456",
}
//console.log(premik.gif);

// === opeartor assign inside the value of type

// map, filter, find, smart way to run for loop

const numbers= [2,3,4,5,6,8,9];
/* const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
    
} */

// MAP

//const mapResult = numbers.map(function(element, index, array)

/* const mapResult = numbers.map(function(element, index, array){
    return element * element;
});
 */

//  const square = element => element * element;
//  const square = x => x * x;

// FILTER

const filterVar = numbers.filter( x => x < 5);

const mapResult = filterVar.map( x => x * x);

// FIND

const findVar = numbers.find(x => x > 5);

console.log("map", mapResult);
console.log("filter", filterVar);
console.log("find", findVar);

// Advance Mappping
//const nameOutput = [];
const studentsMap = [
    {id: 01, name: "Omor Sunny"},
    {id: 02, name: "Mousumy"},
    {id: 03, name: "Sabana"},
    {id: 04, name: "Razzak"},
];

/* const stdMap = studentsMap.map( x => {
    const getName = x.name;
    nameOutput.push(getName);
}); */

const stdName = studentsMap.map(s => s.name);
const stdIds = studentsMap.map(s => s.id);
const biggerId = studentsMap.filter(s=>s.id > 02);
const findId = studentsMap.find(s=>s.id > 02);

console.log(stdName);
console.log(stdIds);
console.log(biggerId);
console.log(findId);


// Scope, block scope, access outer scope variable


// Closure, encapsulation, private variable

function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());

// Array slice, splice, array join elements

const numbersSlice = [0,1,2,3,4,5,6,7,8,9];

const part = numbersSlice.slice(0, 4);
const removed = numbersSlice.splice(0, 4, 45,44,46);
const together = numbersSlice.join(",");
console.log(part);
console.log(removed);
console.log(numbersSlice);
console.log(together);
