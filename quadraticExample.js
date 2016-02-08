/**
 * Created by Josh on 2/8/2016.
 */

var algebra = require('algebra.js');
var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;
var n1 = algebra.parse("x + 5");
var n2 = algebra.parse("x - 3/4");

var quad = new Equation(n1.multiply(n2), 0);

console.log(quad.toString());

var answers = quad.solveFor("x");

console.log("x = " + answers.toString());