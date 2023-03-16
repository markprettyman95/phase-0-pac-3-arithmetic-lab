function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}


function makeInt(n) {
    const parsed_int = Number.parseInt(n, 10);
    return isNaN(parsed_int) ? NaN : parsed_int;
}
  
  function preserveDecimal(n) {
    const parsed_float = Number.parseFloat(n);
    return isNaN(parsed_float) ? NaN : parsed_float;
}