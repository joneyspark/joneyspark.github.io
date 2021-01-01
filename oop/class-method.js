class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power
    }

    getPower() {
        if(this.power){
            return this.power;
        }
        return 'I have no power'
    }
    goForGrocery(budget){
        if(this.power && budget > 500){
            console.log(this.getPower());
        }
        return "Price is too high, I can not buy";
    }
}

const catMane = new Hero('Batman', 'Deep Khamsi');

console.log(catMane.name);
console.log(catMane.goForGrocery(1000));

