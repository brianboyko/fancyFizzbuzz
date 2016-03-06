// considered using optimist but it was a bit overkill. 
import { HELP_TEXT, VERSION } from './constants'

var getArgumentsFromCommandLine = function(){
  // "clArgs": "Command Line Arguments"
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
          argObj.secondModulus == args[i+2];
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
        argObj.buzzterm = args[i+2];
      default:
      break;
    }
  }
  return argObj; 
}

var processInput = function(){
  const helpFlags = ['-h', 'h', 'help', '-help', '--help', '--v'];
  const versionFlags = ['-v', 'v', '-version', '--version', '--v'];
  var args = getArgumentsFromCommandLine();
  args = showAndRemoveSpecialFlags(args, versionFlags, VERSION);
  args = showAndRemoveSpecialFlags(args, helpFlags, HELP_TEXT);
    // at this point, args should only contain the flags we're interested in.

  var argumentObject = {
    first: prepNumbers(args[0]), // required
    last: prepNumbers(args[1]), // required
    firstModulus: 3, // default. 
    secondModulus: 5, // default. 
    input: null,
    output: null,
    fizzTerm: "Fizz", // default.
    buzzTerm: "Buzz", // default. 
  }

  // modify the argument object with any special cases that the user has entered: 
  argumentObject = parseFlags(argumentObject, args); 
  return argumentObject; 
} 


export { 
  getArgumentsFromCommandLine, 
  showAndRemoveSpecialFlags, 
  prepNumbers, 
  parseFlags, 
  parseInput, 
  processInput
} 
