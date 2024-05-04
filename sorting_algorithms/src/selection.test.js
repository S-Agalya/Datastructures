import { selectionsort } from "./selectionsort";
test("selection sort",function(){
    var result=[1,5,3,4,2,4,6]
    expect(selectionsort(result)).toEqual([ 1, 2, 3, 4,
        4, 5, 6])
})