//The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case

switch (expression){
  
    case value1:
        /* implement the statement(s) to be executed when
        expression = value1 */
        break;
    case value2:
        /* implement the statement(s) to be executed when
        expression = value2 */
        break;
    case value3:
        /* implement the statement(s) to be executed when
        expression = value3 */
        break;
    default:
       /* implement the statement(s) to be executed if expression 
       doesn't match any of the above cases */ 
  }

//EXAMPLE

// Set the student's grade
const grade = 87;

switch (true) {
    // If score is 90 or greater
    case grade >= 90:
        console.log("A");
        break;
    // If score is 80 or greater
    case grade >= 80:
        console.log("B");
        break;
    // If score is 70 or greater
    case grade >= 70:
        console.log("C");
        break;
    // If score is 60 or greater
    case grade >= 60:
        console.log("D");
        break;
    // Anything 59 or below is failing
    default:
        console.log("F");
}