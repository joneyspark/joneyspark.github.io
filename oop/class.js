class Pendrive {
    constructor(capacity, color, price){
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const ignite = new Pendrive('36GB', 'White', 1000);
const oakwood = new Pendrive('4GB', 'Black', 500);

console.log(ignite);
console.log(oakwood);