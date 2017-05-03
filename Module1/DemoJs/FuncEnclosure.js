function celeberityName(firstName){
    var nameIntro = "This celeberity is ";

    function lastName(theLastName){
        console.log(nameIntro + firstName + " " + theLastName);
    }

    return lastName;
}

var myName = celeberityName("Danilo");

myName("Kceres");