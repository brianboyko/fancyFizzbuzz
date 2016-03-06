// considered using optimist but it was a bit overkill. 
var prompt = require('prompt'); 
import { HELP_TEXT, VERSION } from './constants'

var getArgumentsFromCommandLine = function(){
  // "clArgs": "Command Line Arguments"
    var clArgs = []; 
    process.argv.forEach(function (val, index, array) {
      clArgs.push(val);
  });
  return clArgs.slice(2); 
}

var showAndRemoveSpecialFlags = function(args, flags, text){
  var showed = false; 
  for (var i = 0; i < flags.length; i++){
    if (args.indexOf(flags[i]) != -1){
      if (!showed) {
       console.log(text); // help text and version text should never be written to file.
       showed = true; 
      }
      // removes the flag. 
      args.splice(args.indexOf(flags[i]), 1)
    }
  } 
  return args;
} 


var prepNumbers = function(strNum){
  var bigNumArray = []; 
  if (typeof(strNum) == 'string'){
    if (strNum.length < 15){
      return toNumber(strNum); 
    } else {
      while(strNum.length > 0){
        bigNumArray.push(strNum.slice(0, 15))
        strNum = strNum.slice(15); 
      }
    }
  } else if (typeof(strNum) == 'number' && strNum != NaN){
    return strNum;
  } else {
    console.error("Argument is not a number nor a string which can be parsed to a number")
    return null; 
  }
}

// using the switch fall-through here. 
var parseFlags = function(argObj, args){
  for (var i = 0; i < args.length; i++){
    switch(args[i]){
      case '-m':
      case '-moduli':
        if(typeof(args[i+1]) == 'number'){
          argObj.firstModulus = args[i+1];
        }
        if(typeof(args[i+2]) == 'number'){
          argObj.secondModulus = args[i+2];
        }
        break;
      case '-i':
      case '-input':
        argObj.input = args[i+1]; 
        break; 
      case '-o':
      case '-output':
        argObj.output = args[i+1]; 
        break; 
      case '-t':
      case '-terms':
        argObj.fizzTerm = args[i+1];
        argObj.buzzTerm = args[i+2];
      default:
      break;
    }
  }
  return argObj; 
}

var processInput = function(){
  const helpFlags = ['-h', 'h', 'help', '-help', '--help', '--h'];
  const versionFlags = ['-v', 'v', '-version', '--version', '--v'];
  var args = getArgumentsFromCommandLine();
  args = showAndRemoveSpecialFlags(args, versionFlags, VERSION);
  args = showAndRemoveSpecialFlags(args, helpFlags, HELP_TEXT);
    // at this point, args should only contain the flags we're interested in.

  var argumentObject = {
    first: args[0], // required
    last: args[1], // required
    firstModulus: 3, // default, may be overwritten in parseFlags
    secondModulus: 5, // default, may be overwritten
    input: null,
    output: null,
    fizzTerm: "Fizz", // default.
    buzzTerm: "Buzz", // default. 
  }

  // modify the argument object with any special cases that the user has entered: 
  argumentObject = parseFlags(argumentObject, args); 
  return argumentObject; 
} 





var args = getArgumentsFromCommandLine();

// if no args, prompt for values
if(args.length < 2){
  var promptedArgs = {}; 

        const shouldBeObj = {
        first: 20,
        last: 40,
        firstModulus: 6,
        secondModulus: 10,
        input: 'dummyInput.csv',
        output: 'dummyOutput.csv',
        fizzTerm: 'Fudder',
        buzzTerm: 'Dudder'
      }

var promptForArgs = function(){
  var promptedArgs = {}; 
  prompt.start();
  console.log("Please enter the first value:\n")
  prompt.get(['start'], function(err, result){
    if (typeof(result.start) != 'number'){
      console.log("I'm sorry. That's not a number I can use. Aborting program.")
      process.exit(); 
    } else {
      promptedArgs.start = result.start; 
    }
  })
  console.log("Please enter the second value:\n")
  prompt.get(['end'], function(err, result){
    if (typeof(result.start) != 'number'){
      console.log("I'm sorry. That's not a number I can use. Aborting program.")
      process.exit(); 
    } else {
      promptedArgs.end = result.end; 
    }
  })
}

export { 
  getArgumentsFromCommandLine, 
  showAndRemoveSpecialFlags, 
  prepNumbers, 
  parseFlags, 
  processInput,
  promptForArgs
} 
