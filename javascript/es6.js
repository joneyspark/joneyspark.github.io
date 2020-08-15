// Arraw Function ES6

const doubleIT = (num)=> num * 2;

const add = (x, y) => x + y;

const give5 = () => 5;

const bishal = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result4 = sum * diff;
    return result4;
}

const result = doubleIT(10);
const result2 = add(5, 4);
const restult3 = give5();
const restult4 = bishal(7, 5);
/* 
console.log(result);
console.log(result2);
console.log(restult3);
console.log(restult4);
 */
// Spread operator, concatenate multiple arrays, array max

const ages = [12,14,16,18];
const ages2 = [30,34,38,42];
const ages3 = [50, 53,56,58,59];

// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);


//max number

const business = 650;
const minister = 445;
const sochib = 320;

// const maXrestult = Math.max(business, minister, sochib);

const takaPosha = [650, 456, 544];
const takaPoshaReslt = Math.max(...takaPosha);
console.log("Max Number: ", takaPoshaReslt);


// Class, constructor, create object from class

class Student{
    constructor(givenId, givenName){
        this.id = givenId;
        this.name = givenName;
        this.school = "Badsha Faishla Islamic Ins"
    }
}

const student1 = new Student(01, "Lucky");
const student2 = new Student(02, "Boney");
const student3 = new Student(03, "Joney");

console.log(student1, student2, student3);

// Inheritance, extends class, super, class method

class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(givenCname){
        super();
        this.name = givenCname;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const child1 = new Child("Arnold");
const child2 = new Child("Tom");

console.log(child1.getFullName(), child2.getFullName());

// Destructure, Object, array, destructure complex object

const person = { name: "joney", phone: 01236548, age: 17, job: 'facebook'}

const {phone, name} = person
const job = person.job;
console.log(name, phone);
console.log(job);

const friends = ["Joney", "Boney", "Lucky", "Nirjhor", "Bappa"];

const [chotoFr, ...restFr] = friends;

console.log(chotoFr);
console.log(restFr);