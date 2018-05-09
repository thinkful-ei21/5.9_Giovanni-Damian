'use strict';

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  }
};


Database.findOne = function(query){
  let out = this.store.heroes.find(function(hero){
    let bool = true;
    Object.keys(query)
      .forEach(function(key){
        query[key] === hero[key] ? bool = bool & true : bool = bool & false;});
    return bool;
  });
  return out === undefined ? null : out;
};


console.log(Database.findOne({ id: 2 }));

