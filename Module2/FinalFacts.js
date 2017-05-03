var seaFood = {small:"shrimp", big:"shark"};

console.log("small" in seaFood); //true

console.log(seaFood.hasOwnProperty("toString")); //false

for(var item in seaFood){
    console.log(item); //prints the small and big seafood
}