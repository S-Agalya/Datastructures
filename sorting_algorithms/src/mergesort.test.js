import { mergesort } from "./mergesort";
test("mergesort",function(){
    var result=[8,3,6,5,7,2,1]
    expect(mergesort(result)).toEqual([1, 2, 3, 5,
        6, 7, 8])
})