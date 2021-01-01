class Tiger {
    // #speed = 100;
    constructor(name) {
        this.name = name;
        this.#speed = 120;
    }
    run() {
        console.log(`I'm ${this.name}. Running at ${this.#speed}/mph ` );
    }
}

const royal = new Tiger('Royal Bangal');
royal.run();