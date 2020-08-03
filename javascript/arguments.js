function fullName(firstName, lastName){
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        fullName = fullName + ' ' + arguments[i];
        
    }
    return fullName;
}

console.log(fullName("jui", "joney", "spark",));