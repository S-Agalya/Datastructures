import { fibonacci } from "./tabulation";
test('tabulation example',function(){
    var result=5
    expect(fibonacci(result)).toEqual(5)
})