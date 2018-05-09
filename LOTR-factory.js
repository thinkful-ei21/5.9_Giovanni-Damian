'use strict';

function createCharacter(Name, Nickname, Race, Origin, Attack, Defense){
    
  this.Name = Name,
  this.Nickname = Nickname,
  this.Race = Race,
  this.Origin = Origin,
  this.Attack = Attack,
  this.Defense = Defense;
}

createCharacter.prototype.describe = function(){
  console.log(`${this.Name} is a ${this.Race} from ${this.Origin}.`);
};

createCharacter.prototype.evaluateFight = function(enemy){
  function evalDamage(att, def){
    return att > def ? att-def : 0;
  };
  let x = evalDamage(this.Attack, enemy.Defense);
  let y = evalDamage(enemy.Attack, this.Defense);

  return `Your opponent takes ${x} damage and you receive ${y} damage`

}

let characters = [
  new createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  new createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  new createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  new createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  new createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
];

characters.push(new createCharacter('Arwen Undomiel', 'Arwen','Half-Elf', 'Rivendell', 5, 5));

characters.find(char => char.Nickname === 'aragorn').describe();

let hobbits = characters.filter(char => char.Race === 'Hobbit');

let highAttack = characters.filter(char => char.Attack >5);


