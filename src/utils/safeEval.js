const safeEval = str => {
  /* 
  This is safe(r) than eval 
  Instead of directly evaluating the string excpression, it returns an anonymous function, the body of which returns the result of the expression.  We then immediately invoke the anonymous function by appending ().
  See here for further explanation:
  https://www.educative.io/answers/eval-vs-function-in-javascript

  That said, a user could still edit mathStr to execute arbitray code.
  To further secure this we need to sanitize the input to ensure only numbers, valid operators, and period are allowed in mathStr.  
  */

  const notValid = /[a-zA-Z|;]/g.test(str);
  if (notValid) {
    console.error(str);
    alert("Invalid operations detected.  Resetting");
    return "0";
  }

  return new Function("return " + str)(); // eslint-disable-line no-new-func
}

export default safeEval;