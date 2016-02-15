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
    //var linearEquationInput = prompt("Enter an equation: ");
    var linearEquationInput = algebra.parse(document.getElementById("linearEquationInput").value);
    //var linearEquationInput = algebra.parse("x^3 + 9x^2 + 26x + 24");
    ///document.getElementById("demo").innerHTML = linearEquationInput.toString();
    //console.log(typeof String(linearEquationInput));
    //var linearEquationString = String(linearEquationInput);
    //document.getElementById("demo").innerHTML = "linearEquationString";
    var linearEquationSolveX = new Equation(linearEquationInput, 0);
    //document.getElementById("demo1").innerHTML = linearEquationSolveX;
    var linearAnswer = linearEquationSolveX.solveFor("x");
    var linearAnswers = linearAnswer.toString();
    katex.render("x = " + linearAnswers, mykatex1, {displayMode: true});
    ///document.getElementById("equationOutput").innerHTML = linearAnswer.toString();
    //document.getElementById("demo2").innerHTML = linearAnswers;
    //document.getElementById("equationOutput").innerHTML = linearAnswers;
    //console.log(linearAnswers);
}

function findingYIntercept() {
    var linearEquationInput = document.getElementById("linearEquationInput").value;
    //var linearEquationInput = "x+5";
    var yValue = algebra.parse("y");
    var linearEquationInputReplace = linearEquationInput.replace(/x/g, "0");
    // console.log(linearEquationInputReplace)
    var linearEquationInputEquation = algebra.parse(linearEquationInputReplace);
    var linearEquationSolveY = new Equation(yValue, linearEquationInputEquation);
    var yInterceptAnswers = linearEquationSolveY.solveFor("y");
    var yInterceptAnswers = yInterceptAnswers.toString();
    katex.render("y = " + yInterceptAnswers, mykatex2, {displayMode: true});
    //console.log(yInterceptAnswers.toString());
}