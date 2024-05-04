//mergesort

 export function mergesort(arr){
    if(arr.length<=1) return arr
    var mid=Math.floor(arr.length/2)
    var left_Array=mergesort(arr.slice(0,mid))
    var right_Array=mergesort(arr.slice(mid))
    return merge(right_Array , left_Array)
}
 export function merge(left_Array,right_Array){
    let result=[]
    while(left_Array.length && right_Array.length){
        if(left_Array[0]<right_Array[0]){
            result.push(left_Array.shift())
        }else{
            result.push(right_Array.shift())
        }
       
    }
    return [...result, ...left_Array, ...right_Array]
}

//console.log(mergesort([8,3,6,5,7,2,1]));