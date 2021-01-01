class SmartPhone {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getCharging(){
        console.log("Hello! I'm charging");
    }
}

class Phone extends SmartPhone {
    constructor(name, price, camera) {
        super(name, price);
        this.camera = camera;
    }

}

class Watch extends SmartPhone {
    constructor(name, price, distance){
        super(name, price);
        this.distance = distance;
    }
}

class Tablet extends SmartPhone{
    constructor(name, price, isWifi){
        super(name, price);
        this.isWifi = isWifi;
    }
}

const tablet = new Tablet('Samsung', 45600, true);

console.log(tablet.getCharging());