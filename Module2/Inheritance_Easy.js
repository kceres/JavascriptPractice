var vegetable = function(){
    this.type = "veggie";
}

vegetable.prototype.print = function(){
    console.log(this.type + "is good for you")
}

var carrot = new vegetable()
carrot.print();

vegetable.prototype.color = "wonderful color";

console.log(carrot.color);