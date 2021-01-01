
// FIFO Data Structure / Queue Structure

// First in First out

class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const premiks = new Queue();

premiks.enqueue("Ashiq");
premiks.enqueue("Dewan");
premiks.enqueue("Pream");
premiks.enqueue("priyo");

console.log(premiks.queue);

const winner = premiks.dequeue()

console.log(winner);
console.log(premiks.queue);