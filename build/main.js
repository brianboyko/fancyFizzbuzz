'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var VERSION = 'v1.0.0';

var HELP_TEXT = 'Help Text Goes Here';

var getArgumentsFromCommandLine = function getArgumentsFromCommandLine() {
  // "clArgs": "Command Line Arguments"
  var clArgs = [];
  process.argv.forEach(function (val, index, array) {
    clArgs.push(val);
  });
  return clArgs.slice(2);
};

var showAndRemoveSpecialFlags = function showAndRemoveSpecialFlags(args, flags, text) {
  var showed = false;
  for (var i = 0; i < flags.length; i++) {
    if (args.indexOf(flags[i]) != -1) {
      if (!showed) {
        console.log(text); // help text and version text should never be written to file.
        showed = true;
      }
      // removes the flag.
      args.splice(args.indexOf(flags[i]), 1);
    }
  }
  return args;
};

var prepNumbers = function prepNumbers(strNum) {
  var bigNumArray = [];
  if (typeof strNum == 'string') {
    if (strNum.length < 15) {
      return toNumber(strNum);
    } else {
      while (strNum.length > 0) {
        bigNumArray.push(strNum.slice(0, 15));
        strNum = strNum.slice(15);
      }
    }
  } else if (typeof strNum == 'number' && strNum != NaN) {
    return strNum;
  } else {
    console.error("Argument is not a number nor a string which can be parsed to a number");
    return null;
  }
};

// using the switch fall-through here.
var parseFlags = function parseFlags(argObj, args) {
  for (var i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '-m':
      case '-moduli':
        if (typeof args[i + 1] == 'number') {
          argObj.firstModulus = args[i + 1];
        }
        if (typeof args[i + 2] == 'number') {
          argObj.secondModulus == args[i + 2];
        }
        break;
      case '-i':
      case '-input':
        argObj.input = args[i + 1];
        break;
      case '-o':
      case '-output':
        argObj.output = args[i + 1];
        break;
      case '-t':
      case '-terms':
        argObj.fizzTerm = args[i + 1];
        argObj.buzzterm = args[i + 2];
      default:
        break;
    }
  }
  return argObj;
};

var processInput = function processInput() {
  var helpFlags = ['-h', 'h', 'help', '-help', '--help', '--h'];
  var versionFlags = ['-v', 'v', '-version', '--version', '--v'];
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
    buzzTerm: "Buzz" };

  // default.
  // modify the argument object with any special cases that the user has entered:
  argumentObject = parseFlags(argumentObject, args);
  return argumentObject;
};

// ./fizzbuzz.js

var fizzbuzzer = function fizzbuzzer(number) {
  var fizzer = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];
  var buzzer = arguments.length <= 2 || arguments[2] === undefined ? 5 : arguments[2];
  var fizzOutput = arguments.length <= 3 || arguments[3] === undefined ? "Fizz" : arguments[3];
  var buzzOutput = arguments.length <= 4 || arguments[4] === undefined ? "Buzz" : arguments[4];

  // Technically speaking, 0 % any number will return true, but we don't particularly think
  // of 0 as being "divisible" by anything. This should default to "0";
  if (number == 0) {
    return 0;
  } else if (number % fizzer === 0 && number % buzzer === 0) {
    return "" + fizzOutput + buzzOutput + '!';
  } else if (number % fizzer === 0) {
    return fizzOutput + "!";
  } else if (number % buzzer === 0) {
    return buzzOutput + "!";
  } else {
    return number;
  }
};

var createFizzBuzz = function createFizzBuzz(start, end) {
  var fizzer = arguments.length <= 2 || arguments[2] === undefined ? 3 : arguments[2];
  var buzzer = arguments.length <= 3 || arguments[3] === undefined ? 5 : arguments[3];
  var fizzOutput = arguments.length <= 4 || arguments[4] === undefined ? "Fizz" : arguments[4];
  var buzzOutput = arguments.length <= 5 || arguments[5] === undefined ? "Buzz" : arguments[5];

  var output = [];
  var incre = 1;
  if (start > end) {
    incre = -1;
  }
  for (var i = start; end >= start ? i <= end : i >= end; i = i + incre) {
    output.push(fizzbuzzer(i, fizzer, buzzer, fizzOutput, buzzOutput));
  }
  return output;
};

console.log(process.argv);

exports.fizzbuzzer = fizzbuzzer;
exports.createFizzBuzz = createFizzBuzz;
exports.getArgumentsFromCommandLine = getArgumentsFromCommandLine;
exports.showAndRemoveSpecialFlags = showAndRemoveSpecialFlags;
exports.prepNumbers = prepNumbers;
exports.parseFlags = parseFlags;
exports.processInput = processInput;
exports.HELP_TEXT = HELP_TEXT;
exports.VERSION = VERSION;
//# sourceMappingURL=main.js.map
