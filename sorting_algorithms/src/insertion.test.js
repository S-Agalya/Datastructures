import { insertionsort } from "./insertionsort.js";

test("arrange the given elements in a sorted order using insertion sort",()=>{
    var result=[5, 4, 6, 2, 8, 7, 9, 3]
    expect(insertionsort(result)).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
})