function Fruit(name,color){
    console.log("Object log createdby constructor");

    this.type = function(){
        console.log("Hi, I am a fruit");
    }

    this.name = name;
    this.color = color;

}

var orange = new Fruit("orange","orange");

orange.type();
console.log(orange);