
var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    var minValue = array[startIndex];
    var minIndex = startIndex;

    // Loop over items starting with startIndex, 
    for(var i =  minIndex + 1; i < array.length; i++){
        // updating minValue and minIndex as needed:
        console.log('looping ',array[i])
        if(array[i] < minValue){
            minValue = array[i];
            minIndex = i;
            
        }
        console.log('min val ', minValue)
    }
    
    
    return minIndex;
}; 

var array = [18, 6, 66, 44, 9, 22, 14]; 
console.log(indexOfMinimum(array, 3))