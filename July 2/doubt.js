// var name = 'Taylor';

// const P = {
//     name: 'jeremy',
//     talk(){ return function(){ return `${this.name} hello world!`;}
// }}
// const func = P.talk();
// console.log(func());

var name='taylor' 
const person={ name:'jeremy', 
    talk(){ return function(){ return `${this.name} says hello`} 
} 
} 
talkReturn=person.talk() 
console.log(talkReturn())