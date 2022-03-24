function fibonacci(number) {
    var a = 1;
    var b = 1;
    var sum = a + b;
    var temp = 0;
    for (var i = 0; i <= Math.sqrt(number); i++) {
        temp = a + b;
        a = b;
        b = temp;
        sum += temp;
    }
    return sum;
}
console.log(fibonacci(5));
// 1 1 2 3 5
