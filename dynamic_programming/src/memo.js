export function fib_memo(n,memo={}){
    if(n<=1){
        return n
    }
    if(memo[n]){
        return memo[n]
    }
    memo[n]=fib_memo(n-1,memo)+fib_memo(n-2,memo)
    return memo[n]
}
//console.log(fib_memo(10))        