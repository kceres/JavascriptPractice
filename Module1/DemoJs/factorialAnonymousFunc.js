var factorial = function (x) {
    return !(x > 1) ? 1 : arguments.callee(x - 1) * x;
}

console.log(factorial(3));