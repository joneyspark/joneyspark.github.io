//console.log("Hello Joney");

var number1 = 30;
var number2 = '40.5';

var number3 = 40;
number3 = ''+number3;

//number2 = parseInt(number2);
//number2 = parseFloat(number2);
number2 = +number2;

var number4 = 0.1;
var number5 = 0.2;

var total = number4 + number5;

total = total.toFixed(3);

// console.log(total);

// console.log(number1 + number2);

// console.log(typeof number3);

//Array

var friendAge = [12,45,67,89,90];

friendAge[2] = 666;
friendAge.push(500);
friendAge.push(89);
friendAge.pop();
//console.log(friendAge.length);
//console.log(friendAge);

var teaLine = ['palam','kalam', 'salam', 'Balam', 'talam', 'dalam','cillaialm'];
teaLine.push('Joney');
// teaLine.pop();
// teaLine.shift();
//teaLine.unshift('Palam');
var part = teaLine.slice(2, 5);

//console.log(part);

const jsSplice = ['palam','kalam', 'salam', 'Balam', 'talam', 'dalam','cillaialm'];
//jsSplice.splice(2, 3)
//console.log(jsSplice);

//while Loop
/* 
let i = 5;
while(i <= 10){
    console.log(i);
    i++;
} */

//For Loop

/* for(let i = 0; i <= 5; i++){
    console.log(i);
}
 */
for(var j = 0; j<jsSplice.length; j++){
    var arrayOut = jsSplice[j];
    //console.log(arrayOut);
}

//Fuction IncToFeet

function inchToFeet(inch){
    let result = inch/12;
    return result;
}
const output = inchToFeet(166);
//console.log(output);


// Leap year Logic

function leapYear(year){
    if((year % 4 == 0) && (year % 100 != 0 ) || (year % 400 == 0)){
        return true;
    }else{
        return false;
    }
}

let leapYearResult = leapYear(1700);

//console.log(leapYearResult ? 'Leap Year' : 'Not Leap Year');

// Factorial Number with for Loop

/* 1! = 1*1
2! = 1*2
3! = 1*2*3
4! = 1*2*3*4
5! = 1*2*3*4*5
10! = 1*2*3*4*5*6*7*8*9*10
 */

function factorialNumber(givenNum){
    let factorialN = 1;
    for(let f = 1; f<=givenNum; f++){
        factorialN = factorialN*f;
    }
    return factorialN;
}

let factorialResult = factorialNumber(5);
//console.log(factorialResult);


//while loop -> Factorial Number
function whileFactorial(n){
    let wh = 1;
    let factorialvar = 1;
    while(wh <= n){
        factorialvar = factorialvar*wh;
        //console.log(wh, factorial);
        wh++;
    }
    return factorialvar;
}

let whileFactRes = whileFactorial(5);
//console.log(whileFactRes);

// recursive Factorial number
/* 
0! = 1
1! = 1*1
2! = 1*2
3! = 1*2*3
4! = 1*2*3*4
5! = 1*2*3*4*5
6! = 5!*6
7! = (6-1)!*7
8! = (7-1)!*8
n! = (n-1)!*n
 */

function recursionFact(n){
    if(n == 0){
        return 1;
    }else{
        return n * recursionFact(n-1)
    }
}
let recursonRes = recursionFact(5)

//console.log(recursonRes);

// FIBONACCI SERIES

// F = F{n-1}+F{n-2}



let fibo = [0,1]

/* fibo[2] = fibo[2-1] + fibo[2-2];
fibo[3] = fibo[3-1] + fibo[3-2];
fibo[4] = fibo[4-1] + fibo[4-2];
fibo[5] = fibo[5-1] + fibo[5-2];
fibo[n] = fibo[n-1] + fibo[n-2];
 */
function fibonacciFn(n){ 
    for(let i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
        //console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
    }
    return fibo;

}

//let fiboRes = fibonacciFn(12);
//console.log(fiboRes);

// fibonacci Recursive

function fibonacciRecursive(n){
    if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else{
        return fibonacciRecursive(n-1) + fibonacciRecursive(n -2)
    }
}

//let fibonacciRecursiveRes = fibonacciRecursive(10);
//console.log(fibonacciRecursiveRes);


// fibonacci Recursive Series

// [0,1,1,2,3,5,8,13,21]

function fibonacciRecursiveSeries(n){
    if(n == 0){
        return [0];
    }else if(n == 1){
        return [0,1];
    }else{
        let fiboSeries = fibonacciRecursiveSeries(n-1);
        let nextElement = fiboSeries[n-1] + fiboSeries[n-2];
        fiboSeries.push(nextElement);
        return fiboSeries;
    }
}

let fibonacciRecursiveSeriesRes = fibonacciRecursiveSeries(10);
//console.log(fibonacciRecursiveSeriesRes);

// PRIME Number or Not

function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return 'Not a prime Number';
        }
    }
    return 'Prime Number';
}
let primeRes = isPrime(19);
//console.log(primeRes);

// Random Number 1-6

let numB = 2.345;
let nRes = Math.floor(numB);
nRes = Math.ceil(numB);
nRes = Math.round(numB);

let randomNumber = Math.random()*6;
let outputRandom = Math.round(randomNumber);

//console.log(outputRandom);

// max number calculation

let x = 500;
let y = 200;
let z = 300;

if( (x > y) && (x > z)){
    //console.log("X is Bigger Number");
}
else if((y > z) && (y > x)){
    //console.log("Y is Bigger Number");
}
else{
    //console.log("Z is Bigger Number");
}


//Find the largest element of an array

let marks = [45,56,66,78,400];
let max = marks[0];

for(let i = 0; i < marks.length; i++){
    let element = marks[i];
    if(element > max){
        max = element;
    }
}
//console.log(max);

// Remove Duplicate number in an array

let dup = [1,3,45,6,7,3,4,4,56,76,45,88,99,34,55,88,77,99];

let removeDup = [];

for(let i = 0; i < dup.length; i++){
    element = dup[i];
    index = removeDup.indexOf(element);
    if(index == -1){
        removeDup.push(element);
    }
}

//console.log(removeDup);

// word counter

let word = "Hello I'm   Joney Spark. I'm a Web Developer";

let countWord = 0;

for(let i = 0; i < word.length; i++){
    element = word[i];
    if(element == " " && word[i-1] != " "){
        countWord++;
    }
}
countWord++;
//console.log(countWord);

// Reverse word 

let strW = "Hello! World. I'm Joney Spark";
let reverseW = 0;
function reverseWord(strW){
    
    for(let i = 0; i < strW.length; i++){
        let char = strW[i];
        reverseW = char + reverseW;
    }
    return reverseW;
}

let reverwRes = reverseWord("Hello! World. I'm Joney Spark");

console.log(reverseW);