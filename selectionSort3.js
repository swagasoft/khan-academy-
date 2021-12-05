
//HELPER FUNCTION
var swap = function(array, firstIndex, secondIndex){
    console.log('be swapped ', array)
    var temp = array[firstIndex];
    array[firstIndex]  = array[secondIndex];
    array[secondIndex] = temp;
    console.log('swapped ', array)
};



var selectionSort = function(array){
  for(var i = 0; i < array.length; i++){
      console.log('1st loop = ',i)
    //set min to the current iteration of i
    var min = i;
    for(var j = i+1; j < array.length; j++){
        console.log('2st loop = ',j)
        console.log('MIN ',min)
        console.log(array[j] +' compapare ', array[min])
      if(array[j] < array[min]){
          console.log('change ', min + ' and '+ j);
        min = j;
        console.log('after ', min + ' and '+ j);
      }
    }
    swap(array, i, min);
  }
  return array;
};
var array = [3,2,10,1]

console.log(selectionSort(array))