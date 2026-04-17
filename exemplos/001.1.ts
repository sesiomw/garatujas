let fibo = function(times: number, num1: number, num2: number, aux: number): number {
    while(--times) {
    aux = num1 + num2;
    num1 = num2;
    num2 = aux;
    fibo(times, num1, num2, aux)
    }
    return aux;
}

console.time("fibo");
console.log(fibo(10, 0, 1, 0))
console.timeEnd("fibo");