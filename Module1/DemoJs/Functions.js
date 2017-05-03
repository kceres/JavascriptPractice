function showName(firstName, lastName){
    var nameIntro = "Your name is ";

    function makeFullName(){//this is an enclosure
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
}

console.log(showName("Danilo","Cáceres"));//Your name is Danilo Cáceres