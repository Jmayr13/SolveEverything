/**
 * Created by Josh on 2/8/2016.
 */

var algebra = require('algebra.js');
var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;
var expr = new Expression("x");
expr = expr.subtract(3);
expr = expr.add("x");

console.log(expr.toString());

var eq = new Equation(expr, 4);

console.log(eq.toString());

var x = eq.solveFor("x");

console.log("x = " + x.toString());