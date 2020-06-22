//Dit is een grote som
/*
function keer() { return (1230941* 1823794); } 
        console.log(keer());


 function deel() { return (637263/ 54); } 
        console.log(deel());
*/


//IF statements
let youLikeMeat = true;
let myNum = 10;

if (youLikeMeat){

    document.write("Here is the meaty menu...");

} 

if (7 > 5){

    document.write("This expression is ture");

} 

if (myNum == 9){

    document.write("myNum is greater than 10");

} else {

    document.write("myNum is not greater than 10")

}


// Else IF
let myAge = 29; 

if (myAge > 30){

    document.write("you arer over 30!");

} else if (myAge > 20){

    document.write("my age is over 20");

} else if (myAge > 10){

    document.write("my age is over 10");

} else {

    document.write(" you are not over 10")

}


//comparison operators 
x = 5
    x > 4
    x > 5 
    x >= 5
    x >= 4
    x < 5
    x <= 5

//comparing
    x == 5 

// value and type
    x === 5
    x = "5" //string
    x == 5

// tripple ecual (kan alleen kloppen als de string en het nummer overeenkomen)
    x === 5 //not true
    x === "5" //is true

x = 5
    x != 4
    x != 5
    x !== 5 //ook het type

x = "5"
    x !== 5 




//logical operators

//Als allebei de waardes waar zijn dan is deze true
let myVar = 25;

if (myVar >= 18 && myVar <= 30) {
    document.write("You can come, you cool dude")
} else {
    document.write("you aint coming!")
}

//Als een van myVar waar is is de gehele expression waar
let myVar = 25;

if (myVar < 18 || myVar > 30) {
    
    document.write("you aint coming!")
} else {
    document.write("You can come, you cool dude")
}

let myVar = 25;

if (myVar < 18 || myVar > 30 || myVar === 25) {
    
    document.write("you aint coming!")
} else {
    document.write("You can come, you cool dude")
}







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