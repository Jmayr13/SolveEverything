/**
 * Created by Josh on 2/7/2016.
 */

//The main function that will be started after the user inputs an equation
function solve() {
    findXIntercept();

}
function findXIntercept() {
    var expressionInput = getElementById("equationInput");
    var xIntercept = expressionInput.solveFor("x");
    console.log("x = " + xIntercept.toString())
}


//This function takes the users input and prepares it to be solved
function findVars() {
    var input = getElementById("equationInput");
    if (input != null) {

    }
}