'use strict';

let myString = 'craft block argon meter bells brown croon droop';

const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

function decode(word){
    return word[0] in cipher ? word[cipher[word[0]]]: ' ';
}

function decodeWords(string){
    let out = '';
    string.split(' ')
    .forEach(word =>  out += decode(word));       
    return out;
}

console.log(decodeWords(myString));
