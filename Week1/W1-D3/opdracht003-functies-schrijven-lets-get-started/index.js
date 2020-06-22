// opdracht 3 The puppy age calculator 
function calculateDogAge(age) {
    var dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);




// opdracht 3 The Lifetime Supply Calculator
function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(message);
  }
  
  calculateSupply(28, 36);
  calculateSupply(28, 2.5);
  calculateSupply(28, 400);



//opdracht 3, Deel B The Movie Database
var myFavMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    var starsString = 'Stars: ';
    for (var i = 0; i < movie.stars.length; i++) {
        starsString += movie.stars[i];
        if (i != movie.stars.length -1) {
            starsString += ', ';
        }
    }
    console.log(starsString);
}

// Or...
function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('It stars ' + movie.stars.join(', '));
}
printMovie(myFavMovie);
