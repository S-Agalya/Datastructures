import { fibonacci } from "./dynamic_fibo"

test("dynamic programming",function(){
    var result=10
    expect(fibonacci(result)).toEqual([
        0, 1,  1,  2,  3,
        5, 8, 13, 21, 34,
       55
     ])
})