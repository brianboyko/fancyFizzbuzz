// index.js
import { HELP_TEXT, VERSION } from './constants'
import { fizzbuzzer, createFizzBuzz } from './fizzbuzz'
import { 
  getArgumentsFromCommandLine, 
  showAndRemoveSpecialFlags, 
  prepNumbers, 
  parseFlags, 
  parseInput, 
  processInput
} from './processInput'

export { fizzbuzzer, createFizzBuzz }