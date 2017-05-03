//Define the Person constructor
var Person = function(firstName){
    this.firstName = firstName;
}

Person.prototype.sayHello=function(){
    console.log("Hello, I'm " + this.firstName);
};

//Define the student constructor
function Student(firstName, subject){
    //Call the parent constructor, making sure (using Function#call)
    //that "this" is set correctly during the call
    Person.call(this, firstName);

    this.subject = subject;
};

Student.prototype = Object.create(Person.prototype);//see note below

//Set the "constructor" property to refer to student
Student.prototype.constructor = Student;

//Replace the "sayHello" method
Student.prototype.sayHello = function(){
    console.log("Helllo, I'm " + this.firstName + "I'm studying " + this.subject + ".");
}

//Example usage:
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();//Hello, I'm Janet. I'm studying applied Physics

//Check that instanceof works correctly
console.log(student1 instanceof Person);//true
console.log(student1 instanceof Student);//true