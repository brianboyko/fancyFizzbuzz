const fs = require('fs');

import { fizzbuzzer, createFizzBuzz } from './fizzbuzz';


//Check to see if we will get the parameters from an input file.
// instead of returning a value, we will be using callbacks to
// send the data we need to the next step in the algorithm,
// whether that's something we need to wait on a file read for
// or something we can do immediately.
function parseInputFile(inputObj) {
  if (inputObj.input !== null) {
    var fileName = inputObj.input;
    fs.exists(fileName, function(exists) {
      if (exists) {
        fs.stat(fileName, function(error, stats) {
          fs.open(fileName, "r", function(error, fd) {
            var buffer = new Buffer(stats.size);
            fs.read(fd, buffer, 0, buffer.length, null, function(
              error, bytesRead, buffer) {
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

function lockNums(inputObj) { // like the name suggests, the numbers we're using will be locked by this point.
  if (isNaN(inputObj.first) || isNaN(inputObj.last)) {
    console.log("WARN: One or both parameters were NaN:");
    console.log("inputObj in lockNums(inputObj):", inputObj)
    // Oddly enough, some tests will produce this.
    // this actually is a serious concern of mine but simply ran out of time.
    return;
  }

  if (inputObj.output !== null) {
    var stream = fs.createWriteStream(inputObj.output);
    stream.once('open', function(fd) {
      var streamOut = stream.write.bind(this); // bind(this) is needed, otherwise this._writableState will be undefined
      writeOutAll(streamOut, inputObj); // dependency injection -- this way we don't have to write two different functions for outputting to file and outputing to the console.
      stream.end();
    });
  } else {
    writeOutAll(console.log, inputObj); // if we're not writing to a stream, we're writing to a console.
  }
}

function writeOutAll(outputFunc, inputObj) { // output.func will either be a a file stream OR console.log, if no file was specified.
  // do here? check if bignum(inputObj.first or last).isSmall is false, if so, shunt to bigWriteOutAll(); 
  const chunkSize = 10000; // arbitrary.
  var complete = false; // ends our while loop if true.
  var checkpoint = inputObj.first;
  var nextCheckpoint;
  while (!complete) {
    if (Math.abs(checkpoint - inputObj.last) < chunkSize) {
      outputFunc( // console or file
        JSON.stringify( // stream needs to be a string.
          createFizzBuzz(checkpoint, inputObj.last, inputObj.firstModulus,
            inputObj.secondModulus, inputObj.fizzTerm, inputObj.buzzTerm)
        )
        .slice(1, -1) // we want to take off those pesky array "[" and "]" characters, so that our number line is contiguous
      );
      complete = true;
    } else {
      if (checkpoint < inputObj.last) {
        // if we're counting up.
        nextCheckpoint = checkpoint + (chunkSize);
      } else {
        // if we're counting down.
        nextCheckpoint = checkpoint - (chunkSize);
      }
      outputFunc( // console or file
        JSON.stringify( // stream needs to be a string.
          createFizzBuzz(checkpoint, nextCheckpoint - 1, inputObj.firstModulus,
            inputObj.secondModulus, inputObj.fizzTerm, inputObj.buzzTerm)
        )
        .slice(1, -1) + ',' // we want to take off those pesky array "[" and "]" characters, so that our number line is contiguous, and add a trailing comma.
      );
      console.log("Processing #" + checkpoint + " to #" + nextCheckpoint);
      checkpoint = nextCheckpoint;
    }
  }
}

export { parseInputFile }
