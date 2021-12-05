/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
  var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    
    
    while (min <= max){
        guess = Math.floor((max + min) / 2)
        if(array[guess] === targetValue){
         return guess;   
        }else if(array[guess] < targetValue){
         min = guess + 1;   
        }else{
            max = guess - 1;
    }
    
}
return -1;

};


var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);

//Program.assertEqual(doSearch(primes, 73), 20);


// while(min <= max) {
//     guess = Math.floor((max + min) / 2);

//     if (array[guess] === targetValue) {
//         return guess;
//     }
//     else if (array[guess] < targetValue) {
//         min = guess + 1;
//     }
//     else {
//         max = guess - 1;
//     }

// }

// return -1;
// }



// That makes it easy to calculate the runtime of a binary search algorithm on an nnn that's exactly a power of 2.
//  If nnn is 128, binary search will require at most 8 (\log_2 128 + 1log 
//     2
//     ​
//      128+1log, start base, 2, end base, 128, plus, 1) guesses.
//     What if nnn isn't a power of 2? In that case, we can look at the closest lower power of 2.
//      For an array whose length is 1000, the closest lower power of 2 is 512, which equals 2^{9}2 
//     9
//      2, start superscript, 9, end superscript. We can thus estimate that \log_2 1000log 
//     2
//     ​
//      1000log, start base, 2, end base, 1000 is a number greater than 9 and less than 10, or use a
//       calculator to see that its about 9.97. Adding one to that yields about 10.97. In the case of a decimal number,
//        we round down to find the actual number of guesses. Therefore, for a 1000-element array, binary 
//        search would require at most 10 guesses.
//     For the Tycho-2 star catalog with 2,539,913 stars, the closest lower power of 2 is 2^{21}2 
//     21
//      2, start superscript, 21, end superscript (which is 2,097,152), so we would need at most 22 guesses. 
//      Much better than linear search!