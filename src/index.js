// src/index.js
import { processInput } from './processInput';
import { parseInputFile } from './fileOperations'; // tests require access to these functions.
// these are needed for running the mocha tests.
import {fizzbuzzer, createFizzBuzz} from './fizzbuzz.js';
import {bigFizzbuzzer, bigCreateFizzBuzz} from './bigBuzz.js';

  var inputObj = processInput();
  parseInputFile(inputObj); // this will actually call lockNums as a callback.



export { fizzbuzzer, createFizzBuzz, bigFizzbuzzer, bigCreateFizzBuzz }
