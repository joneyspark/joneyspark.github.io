class Dictionary{
    constructor(){
        this.dictonary = {}
    }
    add(key, value){
        this.dictonary[key] = value;
    }
    get(key){
        return this.dictonary[key];
    }
}

const phoneBook = new Dictionary();

phoneBook.add('Mahi', 01756445789);
phoneBook.add('Porimoni', 017564472);
phoneBook.add('Purnima', 017564478321);

console.log(phoneBook.dictonary);

const mahi = phoneBook.get('Mahi');

console.log(mahi);