// LIFO Data Structure

class Stack{
    constructor(){
        this.stack = [];
    }

    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("joney");
guest.add("spark");
guest.add("boney");
guest.add("spark");
guest.add("lucky");

const spearker = guest.remove()

console.log(guest.stack);
console.log(spearker);


