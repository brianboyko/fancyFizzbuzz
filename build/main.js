'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var VERSION = 'v0.0.1';

var HELP_TEXT = 'Welcome to FancyFizzBuzz!, version ' + VERSION + '\r\n\r\nInstallation: \r\n==============================\r\n| $ npm run build\r\n==============================\r\n\r\nCommand Line Usage (from root directory of this project): \r\n==============================\r\n| $ node build/main.js <first> <last> (-h, -v) [-i <filename>] \r\n|        [-o <filename>] [-m <first modulus> <second modulus>] \r\n|        [-t “<first term>” “<second term>”]\r\n==============================\r\n\r\nwhere <first> and <last> are integers. \r\n\r\n* The program can handle any integers from -999,999,999,999,999 to \r\n999,999,999,999,999. \r\n\r\nOther parameters: (case insensitive)\r\n node index.js -h (or -help)\r\n   => Read this help document\r\n node index.js -v (or -version)\r\n   => Get version info\r\n node index.js -i (or -input) [filename]\r\n   => Input min and max from text file. \r\n      This must be in the form "#, #"\r\n      (This is a fairly useless feature but can be expanded\r\n      to include JSON parameters for fine tuning on later features)\r\n node index.js -o (or -output) [filename]\r\n   => Output to file, instead of console\r\n node index.js -m (or -moduli) [fizz modulus] [buzz modulus]\r\n   => Define the string replacement conditions;\r\n      Defaults are 3 and 5, respectively.\r\n      Example: \r\n       $ node index.js 1 10 -m 2 5 \r\n       => “1, Fizz!, 3, Fizz!, Buzz!, \r\n           Fizz!, 7, Fizz!, 9, FizzBuzz!”\r\n node index.js -t (or -terms) [fizz term] [buzz term]\r\n   => Redefine the strings to replace integers with\r\n      Example: \r\n       $ node index.js 1 7 -t “Foo” “Bar” \r\n       => “1, 2, Foo!, 4, Bar!, 7”';

var bigInt$1 = require("big-integer");

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

var parseIfBig = function parseIfBig(argumentObject) {
  if (typeof argumentObject.first == 'number' && typeof argumentObject.last == 'number') {
    return argumentObject;
  } else if (isNaN(Number(argumentObject.first)) || isNaN(Number(argumentObject.last))) {
    console.log("Error: argument is neither a number nor a string that can be parsed into a number.");
  } else {
    argumentObject.first = bigInt$1(argumentObject.first);
    argumentObject.last = bigInt$1(argumentObject.last);
    argumentObject.big = true;
    return argumentObject;
  }
};

var processInput = function processInput() {
  var helpFlags = ['-h', 'h', 'help', '-help', '--help', '--v'];
  var versionFlags = ['-v', 'v', '-version', '--version', '--v'];
  var args = getArgumentsFromCommandLine();
  args = showAndRemoveSpecialFlags(args, versionFlags, VERSION);
  args = showAndRemoveSpecialFlags(args, helpFlags, HELP_TEXT);
  // at this point, args should only contain the flags we're interested in.
  if (args[0] == undefined || args[1] == undefined) {
    console.log(HELP_TEXT);
    process.exit(0);
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
  };

  // modify the argument object with any special cases that the user has entered:
  argumentObject = parseFlags(argumentObject, args);
  argumentObject = parseIfBig(argumentObject);

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

// ./bigBuzz.js
// a specialty library for handling big integers.

var bigInt$2 = require("big-integer");

var bigFizzbuzzer = function bigFizzbuzzer(stringNumber) {
  var fizzer = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];
  var buzzer = arguments.length <= 2 || arguments[2] === undefined ? 5 : arguments[2];
  var fizzOutput = arguments.length <= 3 || arguments[3] === undefined ? "Fizz" : arguments[3];
  var buzzOutput = arguments.length <= 4 || arguments[4] === undefined ? "Buzz" : arguments[4];

  // one could argue that 0 is modulo all numbers, but I think this is better default behavior.
  // The fizzer and buzzer are going to be javascript numbers.
  if (bigInt$2(stringNumber).isSmall & bigInt$2(stringNumber).value === 0) {
    return 0;
  };
  if (bigInt$2(stringNumber).mod(fizzer).value === 0 && bigInt$2(stringNumber).mod(buzzer).value === 0) {
    return "" + fizzOutput + buzzOutput + '!';
  } else if (bigInt$2(stringNumber).mod(fizzer).value === 0) {
    return fizzOutput + "!";
  } else if (bigInt$2(stringNumber).mod(buzzer).value === 0) {
    return buzzOutput + "!";
  } else {
    return bigInt$2(stringNumber).isSmall ? bigInt$2(stringNumber).value : bigInt$2(stringNumber).toString();
  }
};

var bigCreateFizzBuzz = function bigCreateFizzBuzz(start, end) {
  var fizzer = arguments.length <= 2 || arguments[2] === undefined ? 3 : arguments[2];
  var buzzer = arguments.length <= 3 || arguments[3] === undefined ? 5 : arguments[3];
  var fizzOutput = arguments.length <= 4 || arguments[4] === undefined ? "Fizz" : arguments[4];
  var buzzOutput = arguments.length <= 5 || arguments[5] === undefined ? "Buzz" : arguments[5];

  var output = [];
  //bigInt(a).compare(b) => a<b: -1, a=b: 0, a>b: 1
  var incre = bigInt$2(start).compare(end) * -1;
  // Bad code: while (bigInt(start).compare(end) != 0){ will not run the last number inclusive.
  while (bigInt$2(start).compare(end) - incre !== 0) {
    output.push(bigFizzbuzzer(start, fizzer, buzzer, fizzOutput, buzzOutput));
    // can do this without mutation?
    start = bigInt$2(start).add(incre);
  }
  return output;
};

var fs = require('fs');

//Check to see if we will get the parameters from an input file.
// instead of returning a value, we will be using callbacks to
// send the data we need to the next step in the algorithm,
// whether that's something we need to wait on a file read for
// or something we can do immediately.
function parseInputFile(inputObj) {
  if (inputObj.input !== null && inputObj.input !== undefined) {
    var fileName = inputObj.input;
    fs.exists(fileName, function (exists) {
      if (exists) {
        fs.stat(fileName, function (error, stats) {
          fs.open(fileName, "r", function (error, fd) {
            var buffer = new Buffer(stats.size);
            fs.read(fd, buffer, 0, buffer.length, null, function (error, bytesRead, buffer) {
              var data = buffer.toString("utf8", 0, buffer.length);
              // sneaky way of turning strings into data we can use.
              data = JSON.parse('[' + data + ']');
              inputObj.first = data[0];
              inputObj.last = data[1];
              // sadly, until async/await is fully implimented in ES7,
              // we are stuck in this callback.
              fs.close(fd);
              delete inputObj.input; // we can delete this because we no longer need it. We have our numbers.
              lockNums(inputObj); // call lockNums and pass in the new numbers we got from the file;
            });
          });
        });
      }
    });
  } else {
      delete inputObj.input; // we can delete this because it was null to begin with.
      lockNums(inputObj); // call lockNums and pass in the numbers
    }
}

// because this is asynchronous, we must use callbacks, instead of return statements, to make sure that items
// execute in the correct order. (On a refactor, promisification looks promising. No pun intended.)

function lockNums(inputObj) {
  // like the name suggests, the numbers we're using will be locked by this point.
  if (inputObj.output !== null) {
    var stream = fs.createWriteStream(inputObj.output);
    stream.once('open', function (fd) {
      var streamOut = stream.write.bind(this); // bind(this) is needed, otherwise this._writableState will be undefined
      writeOutAll(streamOut, inputObj); // dependency injection -- this way we don't have to write two different functions for outputting to file and outputing to the console.
      stream.end();
    });
  } else {
    writeOutAll(console.log, inputObj); // if we're not writing to a stream, we're writing to a console.
  }
}

function writeOutAll(outputFunc, inputObj) {
  // output.func will either be a a file stream OR console.log, if no file was specified.
  if (inputObj.big) {
    writeOutBig(outputFunc, inputObj);
    return;
  }

  var chunkSize = 10000; // arbitrary.
  var complete = false; // ends our while loop if true.
  var checkpoint = inputObj.first;
  var nextCheckpoint;
  while (!complete) {
    if (Math.abs(checkpoint - inputObj.last) < chunkSize) {
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

function writeOutBig(outputFunc, inputObj) {
  // output.func will either be a a file stream OR console.log, if no file was specified.

  var bigChunkSize = 1000000; // arbitrary.
  var complete = false; // ends our while loop if true.
  var checkpoint = inputObj.first;
  var nextCheckpoint;
  while (!complete) {
    if (Math.abs(checkpoint - inputObj.last) < bigChunkSize) {
      outputFunc( // console or file
      JSON.stringify( // stream needs to be a string.
      bigCreateFizzBuzz(checkpoint, inputObj.last, inputObj.firstModulus, inputObj.secondModulus, inputObj.fizzTerm, inputObj.buzzTerm)).slice(1, -1) // we want to take off those pesky array "[" and "]" characters, so that our number line is contiguous
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
      bigCreateFizzBuzz(checkpoint, nextCheckpoint - 1, inputObj.firstModulus, inputObj.secondModulus, inputObj.fizzTerm, inputObj.buzzTerm)).slice(1, -1) + ',' // we want to take off those pesky array "[" and "]" characters, so that our number line is contiguous, and add a trailing comma.
      );
      console.log("Processing #" + checkpoint + " to #" + nextCheckpoint);
      checkpoint = nextCheckpoint;
    }
  }
}

var bigInt = require('big-integer');

var inputObj = processInput();
parseInputFile(inputObj);

exports.fizzbuzzer = fizzbuzzer;
exports.createFizzBuzz = createFizzBuzz;
exports.bigFizzbuzzer = bigFizzbuzzer;
exports.bigCreateFizzBuzz = bigCreateFizzBuzz;
//# sourceMappingURL=main.js.map
