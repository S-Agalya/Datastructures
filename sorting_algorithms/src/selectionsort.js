//selection sort
 export function selectionsort(arr){
    for(var i=0;i<arr.length-1;i++){
       let minIndex=i
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }

        }
            if(minIndex!==i){
                [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
            }
    }return arr
 }
 //console.log(selectionsort([1,5,3,4,2,4,6]))


 // 1)select the 1st element and compare with the next ele
 // 2) idenetify the smallest no and place it as minindex
// 3) compare the minindex with the next ele j+1 
// 4)if yu find any small no less than the minindex value 
// 5)update the minindex
// 6)if the minindex amd the oher index is not same swap it 

//time complexity =O(n^2) =>since each element is compared with othere ele until the arr is sorted
//space complexity =O(1)