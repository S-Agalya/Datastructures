//quicksort

export function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const leftArray = [];
    const rightArray = [];
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }
    return [...quicksort(leftArray), pivot, ...quicksort(rightArray)];
}

//console.log(quicksort([6,7,4,3,2,9]));