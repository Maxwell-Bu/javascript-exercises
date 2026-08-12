const fibonacci = function(ind) {
    let fib = [0, 1, 1];

    if (ind < 0) {
        return "OOPS";
    } else if (ind < 3) {
        return fib.at(ind);
    }

    for (i = 0; i < ind -2; i++) {
        fib.push(fib.at(-1) + fib.at(-2));
    }
    return fib.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
