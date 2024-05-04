//quicksort

export function quicksort(arr){
    if(arr.length<=1){
        return arr
    }
    const pivot=arr[0]
    const left_Array=[]
    const right_Array=[]
    for(let i=1;i<arr.length;i++){
        if(pivot>arr[i]){
           left_Array.push(arr[i])
        }else{
            right_Array.push(arr[i])
        }
    }return [...quicksort(left_Array),pivot,...quicksort(right_Array)]
}
//console.log(quicksort([6,7,4,3,2,9]));