// src/index.js
import { processInput } from './processInput';
import { parseInputFile } from './fileOperations'; // tests require access to these functions.
// these are needed for running the mocha tests.
import {fizzbuzzer, createFizzBuzz} from './fizzbuzz.js';
import {bigFizzbuzzer, bigCreateFizzBuzz} from './bigBuzz.js';

var inputObj = processInput();
parseInputFile(inputObj); // this will actually call lockNums as a callback.

console.log("bigbuzz", bigCreateFizzBuzz('100000000000000001', '100000000000000015'))
// these are needed for running the mocha tests.
export { fizzbuzzer, createFizzBuzz, bigFizzbuzzer, bigCreateFizzBuzz }
