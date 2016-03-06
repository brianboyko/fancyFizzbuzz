// index.js
import { HELP_TEXT, VERSION } from './constants'
import { fizzbuzzer, createFizzBuzz } from './fizzbuzz'
import { 
  getArgumentsFromCommandLine, 
  showAndRemoveSpecialFlags, 
  prepNumbers, 
  parseFlags, 
  processInput
} from './processInput'

export { fizzbuzzer, 
  createFizzBuzz, 
  getArgumentsFromCommandLine, 
  showAndRemoveSpecialFlags, 
  prepNumbers, 
  parseFlags, 
  processInput,
  HELP_TEXT,
  VERSION
}

console.log(process.argv); 