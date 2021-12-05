
var displayArray = function(array) {
    textFont(createFont("monospace"), 12);
    
};

var swap = function(array, firstIndex, lastIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[lastIndex];
    array[lastIndex] = temp;
    
};

var selectionSort = function(array) {

for(var i = 0; i < array.length; i++){
    var minIndex = i;
    
    for(var j = i + 1; j < array.length; j++){
        
        if(array[j] < array[minIndex]){
            minIndex = j;
        }
    }
    
    swap(array, i, minIndex);
    
    // show every step after swap
    console.log(array)
}
return array;
};

var array = [2, 1,8,9,2,4];
console.log(selectionSort(array));