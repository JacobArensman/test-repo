// DAG 3 WEEK 1 
//OBJECTS AND ARRAYS
let name = 'mosh';
let age = 30;

let person = {  //curle braclets is an object LITERAL
    name: 'mosh',
    age: 30
}; 
console.log(person);

// Dot notation
person.name = 'John';

console.log(person.name);

//bracket Notation
person['name'] = 'Mary'

console.log(person.name);

//bracket Notation 2 
let selection = 'name';
person[selection] = 'Mary'

console.log();

//Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';    //de grote van de array kan je veranderen
console.log(selectedColors[0]);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;          //de objecten in de array kan je veranderen
console.log(selectedColors);

typeof selectedColors //Zo kan je zien wat het is = een 'object' 

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;          
console.log(selectedColors.length); //.lenght laat de hoeveelheid nummers of items in een array zien

//increment ++
let number = 1
number++;
console.log(number) // 2

//decrement -- 
let number = 1
number--;
console.log(number) // 0


//deel 1 opdracht 1 dag 3 

let person = {  //curle braclets is an object LITERAL
    name: 'jacob',
    age: 26
}; 
console.log(person)