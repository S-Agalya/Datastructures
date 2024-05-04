//mergesort

export function mergesort(arr) {
    if (arr.length <= 1) return arr;
    var mid = Math.floor(arr.length / 2);
    var leftArray = mergesort(arr.slice(0, mid));
    var rightArray = mergesort(arr.slice(mid));
    return merge(leftArray, rightArray);
}

export function merge(leftArray, rightArray) {
    let result = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift());
        } else {
            result.push(rightArray.shift());
        }
    }
    return [...result, ...leftArray, ...rightArray];
}


//console.log(mergesort([8,3,6,5,7,2,1]));