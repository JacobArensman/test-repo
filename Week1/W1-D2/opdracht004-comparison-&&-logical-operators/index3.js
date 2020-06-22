//logical operators

//Als allebei de waardes waar zijn dan is deze true
let myVar = 26;

if (myVar >= 18 && myVar <= 25) {
    document.write("50% korting!")
} else {
    document.write("Kom binnen!")
}

const name = Sarah;
if (name == Sarah || name == Abraham){
    document.write("gratis biertje");
}

else if (name != Sarah || name != Abraham){
    document.write("geen gratis pilsie");
}

const totalAmount = 25;

if (totalAmount > 25) {
    document.write("Je krijgt gratis vega bitterballen mee naar huis!");

} else if (totalAmount > 50){
    document.write("Je krijgt gratis nachos mee naar huis!");

} else if (totalAmount > 100){
    document.write("Je krijgt gratis champagne mee naar huis!");
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



//Deel 3:jubileum korting
const totalAmount = 100;

if (totalAmount > 25 && totalAmount < 50) {
    document.write("Je krijgt gratis vega bitterballen mee naar huis!");

} else if (totalAmount > 50 && totalAmount < 100){
    document.write("Je krijgt gratis nachos mee naar huis!");

} else if (totalAmount > 100 && totalAmount < 1000){
    document.write("Je krijgt gratis champagne mee naar huis!");
}