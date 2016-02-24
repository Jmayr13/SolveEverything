/**
 * Created by Josh on 2/14/2016.
 */
var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;

function solve(){
    findingXIntercept();
    findingYIntercept();
}




function findingXIntercept() {
    var linearEquationInput = algebra.parse(document.getElementById("linearEquationInput").value);
    var linearEquationSolveX = new Equation(linearEquationInput, 0);
    var linearAnswer = linearEquationSolveX.solveFor("x");
    //Returns no solution if the equation does not cross the x-axis, prints the answer if there is one
    if (linearAnswer == "0") {
        document.getElementById("mykatex1").innerHTML = "0";
        var linearAnswers = linearAnswer.toString();
        katex.render("x = " + linearAnswers, mykatex1, {displayMode: true});
    } else if (linearAnswer == "") {
        document.getElementById("mykatex1").innerHTML = "no solution";
    } else if(linearAnswer == "" && linearAnswer != "") {
        var linearAnswers = linearAnswer.toString();
        katex.render("x = " + linearAnswers, mykatex1, {displayMode: true});
    }
    else {
        var linearAnswers = linearAnswer.toString();
        katex.render("x = " + linearAnswers, mykatex1, {displayMode: true});
    }
    //console.log(linearAnswer.typeOf)
}

function findingYIntercept() {
    var linearEquationInput = document.getElementById("linearEquationInput").value;
    var yValue = algebra.parse("y");
    var linearEquationInputReplace = linearEquationInput.replace(/x/g, "0");
    var linearEquationInputEquation = algebra.parse(linearEquationInputReplace);
    var linearEquationSolveY = new Equation(yValue, linearEquationInputEquation);
    var yInterceptAnswer = linearEquationSolveY.solveFor("y");
    if (yInterceptAnswer == "0") {
        document.getElementById("mykatex2").innerHTML = "0";
        var yInterceptAnswers = yInterceptAnswer.toString();
        katex.render("y = " + yInterceptAnswers, mykatex2, {displayMode: true});
    } else if (yInterceptAnswer == "") {
        document.getElementById("mykatex2").innerHTML = "No solution";
    } else {
        var yInterceptAnswers = yInterceptAnswer.toString();
        katex.render("y = " + yInterceptAnswers, mykatex2, {displayMode: true});
    }
}