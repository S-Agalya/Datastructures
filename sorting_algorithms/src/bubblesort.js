//bubble sort
export function bubblesort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {  // loop for running multiple times until the array is sorted
        for (var j = 0; j < arr.length - i - 1; j++) { // number of elements to be swapped
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

//console.log(bubblesort([1,5,3,4,2,8,6]))





// 1)compare the 1st and 2nd number
// 2)if 1st no is > than 2nd no swap those numbers 

//time complexity: O(n^2):worst,best,avaerage => since each ele is compared with every other ele until the arr is sorted
//space complexity:O(1)   =>constant space usage : it does not require any extra space other than the input array