// index.js
import { HELP_TEXT, VERSION, NO_ARGS } from './constants'
import { fizzbuzzer, createFizzBuzz } from './fizzbuzz'
import { 
  getArgumentsFromCommandLine, 
  showAndRemoveSpecialFlags, 
  parseFlags, 
  processInput
} from './processInput'
import {chunkCFB, handleChunk} from './shorthand'

// // File System
// const fs = require('fs'); 

// var argumentObj = processInput(); 

// console.log("argumentObj", argumentObj)
// if (argumentObj == NO_ARGS){
//   // if the user hasn't specified arguments, show the help text.
//   console.log(HELP_TEXT);
// } else {
//   var isFile = false; // we'll use this later. For right now, let's assume no output. 
//   if (argumentObj.output != null){ // user specified a file. 
//     if (fs.existsSync(argumentObj.output)){
//       // abort if the file already exists.
//       console.log("Warning. File Exists. Please delete file or specify another filename\n");
//       console.log("Program Aborting: Output File Exists");
//       process.exit();
//     } 
//     // create the file. 
//     var file = fs.openSync(argumentObj.output, 'w') // w = write; 
//     fs.closeSync(file); 
//     isFile = true; 
//   }
//   console.log('Press q key to break');

  // var current = argumentObj.first; 
  // var chunk = {};
  // var earlyBreak = false; 
  // const chunkSize = 10000 // we could make this bigger or smaller. 
  // // big while loop. 
  // while (current != argumentObj.last || !earlyBreak){ // exits only on breaks; 
  //   console.log("Processing: " + current);
  //   if (Math.abs(current - argumentObj.last) < chunkSize){
  //     chunk = chunkCFB(current, argumentObj.last, argumentObj); 
  //     handleChunk(isFile, fs, chunk.output, argumentObj.output); 
  //     current = argumentObj.last; // ends the loop
  //   } else {
  //     var newCurrent = (argumentObj.first < argumentObj.last) ? (current + chunkSize) : (current - chunkSize)
  //     chunk = chunkCFB(current, newCurrent, argumentObj)
  //     handleChunk(isFile, fs, chunk.output, argumentObj.output); 
  //     current = newCurrent; 
  //     if (chunk.earlyBreak){ earlyBreak = true }
  //   }
  // } // end big while loop. 

// }



export { fizzbuzzer, 
  createFizzBuzz, 
  getArgumentsFromCommandLine, 
  showAndRemoveSpecialFlags, 
  parseFlags, 
  processInput,
  HELP_TEXT,
  VERSION
}

