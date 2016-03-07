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

// using the switch fall-through here.
var parseFlags = function parseFlags(argObj, args) {
  for (var i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '-m':
      case '-moduli':
        if (!isNaN(Number(args[i + 1]))) {
          argObj.firstModulus = Number(args[i + 1]);
        }
        if (!isNaN(Number(args[i + 2]))) {
          argObj.secondModulus = Number(args[i + 2]);
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
        argObj.buzzTerm = args[i + 2];
      default:
        break;
    }
  }
  return argObj;
};

var processInput = function processInput() {
  var helpFlags = ['-h', 'h', 'help', '-help', '--help', '--v'];
  var versionFlags = ['-v', 'v', '-version', '--version', '--v'];
  var args = getArgumentsFromCommandLine();
  args = showAndRemoveSpecialFlags(args, versionFlags, VERSION);
  args = showAndRemoveSpecialFlags(args, helpFlags, HELP_TEXT);
  // at this point, args should only contain the flags we're interested in.

  var argumentObject = {
    first: Number(args[0]), // required
    last: Number(args[1]), // required
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

  // one could argue that 0 is modulo all numbers, but I think this is better default behavior.
  if (number === 0) {
    return 0;
  };

  if (number % fizzer === 0 && number % buzzer === 0) {
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

var fs$1 = require('fs');

// step 2: Check to see if we will get the parameters from an input file.
function parseInputFile(inputObj) {
  if (inputObj.input !== null) {
    // step 2a: Yes we will!
    var fileName = inputObj.input;
    fs$1.exists(fileName, function (exists) {
      if (exists) {
        fs$1.stat(fileName, function (error, stats) {
          fs$1.open(fileName, "r", function (error, fd) {
            var buffer = new Buffer(stats.size);

            fs$1.read(fd, buffer, 0, buffer.length, null, function (error, bytesRead, buffer) {
              var data = buffer.toString("utf8", 0, buffer.length);
              // sneaky way of turning strings into data we can use.
              data = JSON.parse('[' + data + ']');
              inputObj.first = data[0];
              inputObj.last = data[1];
              // sadly, until async/await is full implimented in ES7,
              // we are stuck in this callback.  Neverfear, though.

              console.log("inputObj: \n", inputObj);

              fs$1.close(fd);
              delete inputObj.input; // we can delete this because we no longer need it. We have our numbers.
              lockNums(inputObj); // call lockNums and pass in the new numbers we got from the file;
            });
          });
        });
      }
    });
  } else {
      // step 2b: No we won't!
      delete inputObj.input; // we can delete this because it was null to begin with. 
      lockNums(inputObj); // call lockNums and pass in the numbers
    }
}

// because this is asynchronous, we must use callbacks, instead of return statements, to make sure that items
// execute in the correct order. (On a refactor, promisification looks promising. No pun intended.)

function lockNums(inputObj) {
  // like the name suggests, the numbers we're using will be locked by this point.
  if (isNaN(inputObj.first) || isNaN(inputObj.last)) {
    console.log("Oops, Cannot find parameters"); // Oddly enough, some tests will produce this.
    return;
  }

  console.log("inputObj in lockNums", inputObj);
  if (inputObj.output !== null) {
    var stream = fs$1.createWriteStream(inputObj.output);
    stream.once('open', function (fd) {
      console.log("this", this);
      var streamOut = stream.write.bind(this); // bind(this) is needed, otherwise this._writableState will be undefined
      writeOutAll(streamOut, inputObj); // dependency injection FTW!
      stream.end();
    });
  } else {
    writeOutAll(console.log, inputObj);
  }
}

function writeOutAll(outputFunc, inputObj) {
  // output.func will either be a a file stream OR console.log, if no file was specified.
  console.log("outputFunc", outputFunc);
  var chunkSize = 10000;
  var complete = false;
  var checkpoint = inputObj.first;
  var nextCheckpoint;
  console.log(checkpoint);
  while (!complete) {
    console.log("checkpoint", checkpoint);
    if (Math.abs(checkpoint - inputObj.last) < chunkSize) {
      console.log("Math.abs(checkpoint - inputObj.last)", Math.abs(checkpoint - inputObj.last));
      outputFunc( // console or file
      JSON.stringify( // stream needs to be a string.
      createFizzBuzz(checkpoint, inputObj.last, inputObj.firstModulus, inputObj.secondModulus, inputObj.fizzTerm, inputObj.buzzTerm)).slice(1, -1) // we want to take off those pesky array "[" and "]" characters, so that our number line is contiguous
      );
      complete = true;
    } else {
      if (checkpoint < inputObj.last) {
        // if we're counting up.
        nextCheckpoint = checkpoint + chunkSize;
      } else {
        // if we're counting down.
        nextCheckpoint = checkpoint - chunkSize;
      }
      outputFunc( // console or file
      JSON.stringify( // stream needs to be a string.
      createFizzBuzz(checkpoint, nextCheckpoint - 1, inputObj.firstModulus, inputObj.secondModulus, inputObj.fizzTerm, inputObj.buzzTerm)).slice(1, -1) + ',' // we want to take off those pesky array "[" and "]" characters, so that our number line is contiguous, and add a trailing comma.
      );
      console.log("Processing #" + checkpoint + " to #" + nextCheckpoint);
      checkpoint = nextCheckpoint;
    }
  }
}

// tests require access to these functions.

var fs = require('fs');

// step 1: Get initial command line parameters.
var inputObj = processInput();
console.log("inputObj: \n", inputObj);

// Step 2 is in "fileOperations.js"
parseInputFile(inputObj);

exports.fizzbuzzer = fizzbuzzer;
exports.createFizzBuzz = createFizzBuzz;
//# sourceMappingURL=main.js.map
