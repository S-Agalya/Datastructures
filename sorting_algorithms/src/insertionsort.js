//insertion sort

 export function insertionsort(arr){
    for(var i=1;i<arr.length;i++){
        var key=arr[i]
        var j=i-1
        while(j>=0 && arr[j]>key){
          arr[j+1]=arr[j]
          j--
      }
      arr[j+1]=key
    }
    return arr
}
//console.log(insertionsort([5,4,6,2,8,7,9,3]))

// 1)identify the smallest ele in the arr
// 2)compare that ele with the prev ele
// 3)if you find that the prev is greater than the key swap it or else just  leave 


// function bubblesort(arr){
    // for(i=0;i<arr.length;i++){
    //     for(j=0;j<arr.length-i-1;j++){
    //         if(arr[j]>arr[j+1]){
    //             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
    //         }
    //     }
    // }return arr

    // for(i=0;i<arr.length-1;i++){
    //      minIndex=i
    //     for(j=i+1;j<arr.length;j++){
    //         if(arr[j]<arr[minIndex]){
    //             minIndex=j
    //         }         
    //     }if(minIndex!==i){
    //         [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    //     }
    // }return arr

    // for(i=1;i<arr.length;i++){
    //     const key=arr[i]
    //     var j=i-1
    //     while(j>=0 && arr[j]>key){
    //         arr[j+1]=arr[j]
    //         j--
    //     }
    //     arr[j+1]=key
    // }return arr
// }

// console.log(bubblesort([5,6,4,2,3]))


