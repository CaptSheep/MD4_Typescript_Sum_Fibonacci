function fibonacci(number : number){
    let a : number = 1;
    let b : number = 1;
    let sum = a + b;
    let temp = 0
    for ( let i  = 0 ; i <= Math.sqrt(number); i ++){
        temp = a + b;
        a = b ;
        b = temp;
       sum += temp
    }
    return sum ;
}
console.log(fibonacci(5))
// 1 1 2 3 5