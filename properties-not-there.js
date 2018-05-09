'use strict';

let myArr = []

function pConstructor(name, jobTitle, boss = 'Mr Market'){
    myArr.push(
        {
         name,
         jobTitle,
         boss,   
        }
    );
}

pConstructor('bob','unemployed');
pConstructor('steve','deceased');
pConstructor('jeff','redundant');
pConstructor('steve','surplus laborer');
pConstructor('adam','retired');
pConstructor('Mr. Market', 'the invisible hand', null)

function logPerson(person){
    let reportsTo;
    person.boss === null ? reportsTo = `doesn't report to anybody.` : reportsTo = `reports to ${person.boss}.`;
    console.log(`${person.jobTitle} ${person.name} ${reportsTo}`)
}

myArr.forEach(logPerson);