'use strict';

const myObj = {
    foo: 1, bar: 2, fum: 3, quux: 34,  spam: 132451
};

for(let key in myObj){
    console.log(key, myObj[key]);
}