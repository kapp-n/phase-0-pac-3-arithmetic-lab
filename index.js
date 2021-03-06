function add(x, y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x/y;
}
add(100,4);
subtract(4,100);
multiply(100,100);
divide(100,2);

function increment(a) {
    return a += 1;
}
function decrement(a) {
    return a -= 1;
}


function makeInt(n) {
    return parseInt(n,10);
}
makeInt('0.2328');
makeInt("alskjdfh");

function preserveDecimal(n) {
    return parseFloat(n);
}
preserveDecimal('2.222');
preserveDecimal('ashdkjhkal');