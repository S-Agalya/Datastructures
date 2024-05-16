export function fibonacci(n){
    if(n<=1){
        return n 
    }
    var fib=[0,1]
    for(var i=2;i<=n;i++){
     fib[i]=fib[i-1]+fib[i-2]
    }
    return fib[n]
}
//console.log(fibonacci(10))