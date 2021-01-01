function Cat(name){
    this.name = name;
}

Cat.prototype.talk = () => {
    console.log("mewn meww");
}

const myCat = new Cat('Tiger');
myCat.talk();
console.log(myCat);