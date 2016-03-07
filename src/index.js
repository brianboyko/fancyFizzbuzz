// src/index.js
import { processInput } from './processInput'
import { parseInputFile } from './fileOperations' // tests require access to these functions. 
// these are needed for running the mocha tests. 
import {fizzbuzzer, createFizzBuzz} from './fizzbuzz.js'

var inputObj = processInput();
parseInputFile(inputObj); // this will actually call lockNums as a callback. 

// these are needed for running the mocha tests. 
export { fizzbuzzer, createFizzBuzz }


