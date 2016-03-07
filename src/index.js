// index.js
import { HELP_TEXT, VERSION } from './constants'
import { fizzbuzzer, createFizzBuzz } from './fizzbuzz'
import { 
  getArgumentsFromCommandLine, 
  showAndRemoveSpecialFlags, 
  parseFlags, 
  parseInput, 
  processInput
} from './processInput'

import { parseInputFile, writeOutAll } from './fileOperations.js' // tests require access to these functions. 

const fs = require('fs')

var outputLog = []; 

// step 1: Get initial command line parameters. 
var inputObj = processInput();
console.log("inputObj: \n", inputObj); 

// Step 2 is in "fileOperations.js"
parseInputFile(inputObj); // this will actually call lockNums as a callback. 



export { fizzbuzzer, createFizzBuzz }