// /src/shorthand.js
// places to keep code DRY!
import {createFizzBuzz} from './fizzbuzz'

export function chunkCFB(first, second, argObj){
  return createFizzBuzz(first, second, argObj.firstModulus, argObj.secondModulus, argObj.fizzTerm, argObj.buzzTerm)
}

export function handleChunk(isFile, fs, output, filename){
  if(isFile){
    fs.appendFileSync(filename, output, (err) =>{ if (err) throw err; })
  } else {
    console.log(output); 
  }
}