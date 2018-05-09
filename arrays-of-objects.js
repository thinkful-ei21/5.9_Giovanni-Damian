'use strict';

let myArr = []

function pConstructor(name, jobTitle){
    myArr.push(
        {
         name,
         jobTitle,   
        }
    );
}

pConstructor('bob','unemployed');
pConstructor('steve','deceased');
pConstructor('jeff','redundant');
pConstructor('steve','surplus laborer');
pConstructor('adam','retired');

console.log(myArr);