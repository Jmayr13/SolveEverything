/**
 * Created by Josh on 2/8/2016.
 */
var algebra = require('algebra.js');
var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;

var n4 = algebra.parse("x^3 + 9x^2 + 26x + 24");

var cubic = new Equation(n4, 0);


console.log(cubic.toString());

var answers = cubic.solveFor("x");

console.log("x = " + answers.toString());