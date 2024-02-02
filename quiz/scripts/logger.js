// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

const errorObject = {
  errMsg: "An error occured while processing your request."
};

const anotherObject = {
  message: "This is a regular message."
};

logMsg(errorObject);
logMsg(anotherObject);
