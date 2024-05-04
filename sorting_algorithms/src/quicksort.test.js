import { quicksort } from "./quicksort"
test("quick sort",()=>{
    var result=[6,7,4,3,2,9]
    expect(quicksort(result)).toEqual([ 2, 3, 4, 6, 7, 9 ])   
})