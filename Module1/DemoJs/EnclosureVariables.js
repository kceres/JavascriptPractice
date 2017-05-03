var x = 3;

function numSquare(){
    return x*x;
}

var sentence = "There squad of " + x + " is equal to " + numSquare(x);
console.log(sentence);

var num = numSquare(6);
console.log(num);