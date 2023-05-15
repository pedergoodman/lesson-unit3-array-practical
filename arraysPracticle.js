console.log('Arrays Example');

let bagel = [ 'bacon', 'lettuce', 'tomato' ];

// change item within array
bagel[0] = 'maple bacon';
console.log(bagel[0]);
//maple bacon

let indexTest = bagel.indexOf ('maple bacon');
console.log('maple bacon is at index: ' + indexTest );
// index should be 0

//check for item in array
indexTest = bagel.indexOf( 'mustard' );
console.log('mustard is at index: ' + indexTest );
//should return -1, which means not in array

// add to end of array 
bagel.push( 'mustard' );
console.log(bagel);

//remove from end of array
bagel.pop();
//don't need to specify what's being removed, it just pops off the end

//add 2 things to end 
bagel.push( 'mayo', 'asiago' );
console.log(bagel);

// add to the beginning (added 2 things)
bagel.unshift('asiago', 'sesame')
console.log(bagel);

bagel.shift()
console.log(bagel);