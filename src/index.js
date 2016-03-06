// index.js
import { HELP_TEXT, VERSION } from './constants';
import { fizzbuzzer, createFizzBuzz } from './fizzbuzz';
import { 
  getArgumentsFromCommandLine, 
  showAndRemoveSpecialFlags, 
  prepNumbers, 
  parseFlags, 
  processInput,
  promptForArgs
} from './processInput';

var prompt = require('prompt'); 

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


  prompt.start();
  console.log("Please enter the first value:")
  prompt.get(['start'], function(err, result){
    if (typeof(result.start) != 'number'){
      "I'm sorry. That's not a number I can use. Aborting program."
      process.exit(); 
    } else {
      promptedArgs = result.start; 
    }
  })
  console.log("Please enter the first value:")

  prompt.get(['end'], function(err, result){
    if (typeof(result.start) != 'number'){
      "I'm sorry. That's not a number I can use. Aborting program."
      process.exit(); 
    } else {
      promptedArgs = result.start; 
    }
  })
}
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  var util = require('util');
  console.log("To abort, press 'q' then 'enter'");

  process.stdin.on('data', function (text) {
    console.log('received data:', util.inspect(text));
    if (text === 'q\n') {
      done();
    }
  });

  function done() {
    console.log('Now that process.stdin is paused, there is nothing more to do.');
    process.exit();
  }



export { fizzbuzzer, 
  createFizzBuzz, 
  getArgumentsFromCommandLine, 
  showAndRemoveSpecialFlags, 
  prepNumbers, 
  parseFlags, 
  processInput,
  HELP_TEXT,
  VERSION,
  promptForArgs
}

