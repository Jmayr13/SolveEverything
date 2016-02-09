/**
 * Created by Josh on 2/8/2016.
 */
var algebra = require('algebra.js');
var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;

function solve() {
    findingXIntercept();
    findingYIntercept();
}


function findingXIntercept() {
    var linearEquationInput = algebra.parse("x^3 + 9x^2 + 26x + 24");
    var linearEquationSolveX = new Equation(linearEquationInput, 0);
    //console.log(linearEquationSolveX.toString());
    var linearAnswers = linearEquationSolveX.solveFor("x");
    console.log("x = " + linearAnswers.toString());

}

function findingYIntercept() {
    var yValue = algebra.parse("y");
    var linearEquationInput = ("x^3 + 9x^2 + 26x + 24");
    var linearEquationInput = linearEquationInput.replace(/x/g, "(0)");
    // console.log(linearEquationInput)
    var linearEquationInput = algebra.parse(linearEquationInput)
    var linearEquationSolveY = new Equation(linearEquationInput, yValue);
    var yInterceptAnswers = linearEquationSolveY.solveFor("y");
    console.log("y = " + yInterceptAnswers.toString());

}
// can't get this to print to the table cell
// document.getElementById("equationOutput").innerHTML = "x";
