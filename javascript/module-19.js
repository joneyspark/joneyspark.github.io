// Evenify function


function evenify(numbers){
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element % 2 == 0){
            console.log(element*2, ": This is Even Number & Muliplicatin by 2");
        }else{
            console.log(element, ": This is Odd Number");
        }
        
    }

}

console.log(evenify([23,45,6,7,8,9,20,33,44,55,78]));

/* let numbers = [23,45,6,7,8,9,20,33,44,55,78];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    let elmn = element*2;
    console.log(elmn);
} */


// callback function with parameter

function callBackF(name, age, task){
    console.log("Name is:", name);
    console.log("Age is:", age);
    task();
}

function joney(){
    console.log("Most Younger");
}
function boney(){
    console.log("Middle Man");
}
function lucky(){
    console.log("Biggest");
}


callBackF("Joney", 28, joney);
callBackF("Boney", 31, boney);
callBackF("Lucky", 35, lucky);


// Arguments

function argumentsF(num1, num2){
    let sum = 0;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

let argumentResult = argumentsF(12,34,45,67);
console.log(argumentResult);