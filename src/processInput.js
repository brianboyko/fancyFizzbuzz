// considered using optimist but it was a bit overkill.
import { HELP_TEXT, VERSION } from './constants'
var bigInt = require("big-integer");


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

// using the switch fall-through here.
var parseFlags = function(argObj, args){
  for (var i = 0; i < args.length; i++){
    switch(args[i]){
      case '-m':
      case '-moduli':
        if(!isNaN(Number(args[i+1]))){
          argObj.firstModulus = Number(args[i+1]);
        }
        if(!isNaN(Number(args[i+2]))){
          argObj.secondModulus = Number(args[i+2]);
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

var parseIfBig = function(argumentObject){
  if ( typeof(argumentObject.first) == 'number' && 
       typeof(argumentObject.last) == 'number' ){
    return argumentObject;
  } else if ( isNaN(Number(argumentObject.first)) || isNaN(Number(argumentObject.last))) {
    console.log("Error: argument is neither a number nor a string that can be parsed into a number.");
  } else {
    argumentObject.first = bigInt(argumentObject.first); 
    argumentObject.last = bigInt(argumentObject.last);
    argumentObject.big = true; 
    return argumentObject;
  }
}

var processInput = function(){
  const helpFlags = ['-h', 'h', 'help', '-help', '--help', '--v'];
  const versionFlags = ['-v', 'v', '-version', '--version', '--v'];
  var args = getArgumentsFromCommandLine();
  args = showAndRemoveSpecialFlags(args, versionFlags, VERSION);
  args = showAndRemoveSpecialFlags(args, helpFlags, HELP_TEXT);
    // at this point, args should only contain the flags we're interested in.
    if (args[0] == undefined || args[1] == undefined){
      console.log(HELP_TEXT);
      process.exit(0)
    }

  var argumentObject = {
    first: args[0], // required
    last: args[1], // required
    firstModulus: 3, // default.
    secondModulus: 5, // default.
    input: null,
    output: null,
    fizzTerm: "Fizz", // default.
    buzzTerm: "Buzz", // default.
    big: false
  }

  // modify the argument object with any special cases that the user has entered:
  argumentObject = parseFlags(argumentObject, args);
  argumentObject = parseIfBig(argumentObject); 

  return argumentObject;
}


export { processInput }
