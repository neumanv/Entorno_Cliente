"use strict"

function fibonacci(n) {

    const series = Array(n + 1);
    series[0] = 0;
  
    series.fill(1, 1);
  
    for (let i = 3; i < n + 1; i++) {
        series[i] = series[i-1] + series[i-2];
    }
  
    return series;
}
  
function factorial(n) {
    return n === 0 ? 1 : n * factorial (n - 1);
}
  
let serieFibonacci = fibonacci(20);
  
for (let i = 0; i < serieFibonacci.length; i++) {
    document.write(`Factorial de ${serieFibonacci[i]}: ${factorial(serieFibonacci[i])}` + "<br>");
}