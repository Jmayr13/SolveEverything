/**
 * Created by Josh on 2/7/2016.
 */
var algebra = require('algebra.js');
var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;
//The main function that will be started after the user inputs an equation
function solve() {
    findXIntercept();

}
function findXIntercept() {
    var equationToSolve = algebra.parse(getElementById("equationInput"));

    var cubic = new Equation(equationToSolve, 0);


   // console.log(cubic.toString());

    var answers = cubic.solveFor("x");

   // console.log("x = " + answers.toString());
}


//This function takes the users input and prepares it to be solved
function findVars() {
    var input = getElementById("equationInput");
    if (input != null) {

    }
}