import { fibo } from "./fibo"

test("fibonicci", function(){
var result=5
expect(fibo(result)).toEqual([ 0, 1, 1, 2, 3 ]
)
})