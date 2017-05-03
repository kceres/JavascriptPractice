//********************************/*/
//GLOBAL VARIABLE///

var color = "blue";

if(color){
    var color = "purple"// this is a global variable, so color

    console.log(color);// this statement will print purple
}

console.log(color);// this statement will print purple


//********************************/*/
//LOCAL VARIABLE///
var color = "blue";

function printColor(){
    var color="purple";//this is a local variable
    console.log(color);//this statement will print purple
}

printColor();
console.log(color);//this statement will print blue;