function meTime() {//Name function
    alert("Go do something fun!");
}

var meTime = function () {//Anonymous function
    alert("Go do something fun!");
}

//Both functions logicall do make same things.
//The difference is, the anonymous function can not be accessed before the meTime variable is declared,
//while the named function can be accessed at any time


//Function expression
var sayHi = function(){
    alert("Hello");
};

//in a object
var Pony = {
    sayName: function(){
        alert("My name is Pony");
    }
};

//Event handler
$("p").click = function(){
    alert("Hello");
};

//self invoking functions
((function(){
    alert("Hello");
})());