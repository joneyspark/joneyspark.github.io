// call apply

const normalPerson = {
    firstName: 'Joney',
    lastName: 'spark',
    salary: 40000,
    getFullName: function(){
        return this.firstName+" "+this.lastName;
    },
    getSalary: function(amount, tips, tax){
        console.log(this);
        return this.salary = this.salary - amount - tips - tax;
    }
}
/* 
console.log(normalPerson.getFullName());
normalPerson.getSalary(2000);
normalPerson.getSalary(20000);
console.log(normalPerson.salary);
 */

 // Bind function

 const heroPerson = {
     firstName: 'Boney',
     lastName: 'Islam',
     salary: 20000
 }

 const frindlyPerson = {
     firstName: 'Lucky',
     lastName: 'Islam',
     salary: 30000
 }
/* 
 const heroGetSalry = normalPerson.getSalary.bind(heroPerson);
heroGetSalry(500);
heroGetSalry(1500);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

 */

// CALL function

/* const heroGetSalryCall = normalPerson.getSalary.call(heroPerson, 400, 300, 10000);
console.log(heroPerson.salary);
 */

 // Apply Function

const heroGetSalryCall = normalPerson.getSalary.apply(heroPerson, [400, 300, 10000]);
console.log(heroPerson.salary);

