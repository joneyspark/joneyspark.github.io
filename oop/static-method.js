class Animal {
    // static category = 'Dog';
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }
    static compare(animale1, animale2){
        if(animale1.speed > animale2.speed){
            return `${animale1.name} is faster`;
        }
        return `${animale2.name} is faster`;
    }
}

const myRat = new Animal('rat', 12);
const myDog = new Animal('dog', 50);

console.log(Animal.compare(myRat, myDog));
