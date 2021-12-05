
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    return array

    console.log('see array ', array);
};



let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
        
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        swap(arr,i, min );
  
    }
    return arr;
}

var array = [22, 11, 99, 88, 9, 7, 42];
console.log(selectionSort(array));
// println("Array after sorting:  " + array);