import { fib_memo } from "./memo.js"
test('memoization concept',function(){
    var result=10
    expect(fib_memo(result)).toEqual(55)
})