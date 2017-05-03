var myGrades = {};

var collegeAlgebra = {
    level: "freshman",
    difficulty: "hard",
    expectedGrade:98,

    textbook: function(){
        console.log("College Algebra for Freshman is the required text");
    }
}

delete collegeAlgebra.level //level property is deleted

var collegeAlg = new Object;
collegeAlg.level = "freshman";
collegeAlg.textbook = function(){
    console.log("College Alg for Freshman is the required text");
}


collegeAlg["textbook"] = function(){
    console.log("[Bracket] - College Alg for Freshman is the required text");
}
var sk = collegeAlg["textbook"];

console.log(collegeAlgebra);
collegeAlgebra.textbook();
console.log(collegeAlg);
console.log(collegeAlg["sk"]);