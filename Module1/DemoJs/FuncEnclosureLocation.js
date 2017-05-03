function theLocation(){
    var city = "Osasco";

    return {
        get: function(){console.log(city);},
        set: function(newCity){city = newCity;}
    }
}

var myPlace = theLocation();
myPlace.get();
myPlace.set("São Paulo");
myPlace.get();