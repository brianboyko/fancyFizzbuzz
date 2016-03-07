Welcome to FancyFizzBuzz!, version 0.0.1

Installation: 
==============================
| $ npm run build
==============================

Command Line Usage (from root directory of this project): 
==============================
| $ node build/main.js <first> <last> (-h, -v) [-i <filename>] 
|        [-o <filename>] [-m <first modulus> <second modulus>] 
|        [-t “<first term>” “<second term>”]
==============================

where <first> and <last> are integers. 

* The program can handle any intergers from -999,999,999,999,999 to 
999,999,999,999,999. 

Other parameters: (case insensitive)
 node index.js -h (or -help)
   => Read this help document
 node index.js -v (or -version)
   => Get version info
 node index.js -i (or -input) [filename]
   => Input min and max from text file. 
      This must be in the form "#, #"
      (This is a fairly useless feature but can be expanded
      to include JSON parameters for fine tuning on later features)
 node index.js -o (or -output) [filename]
   => Output to file, instead of console
 node index.js -m (or -moduli) [fizz modulus] [buzz modulus]
   => Define the string replacement conditions;
      Defaults are 3 and 5, respectively.
      Example: 
       $ node index.js 1 10 -m 2 5 
       => “1, Fizz!, 3, Fizz!, Buzz!, 
           Fizz!, 7, Fizz!, 9, FizzBuzz!”
 node index.js -t (or -terms) [fizz term] [buzz term]
   => Redefine the strings to replace integers with
      Example: 
       $ node index.js 1 7 -t “Foo” “Bar” 
       => “1, 2, Foo!, 4, Bar!, 7”
 
Node Package Usage

ES6: 
  import {createFizzBuzz as fizzBuzz} from './lib/index'
ES5: 
  var fizzBuzz = require('./lib/index').createFizzBuzz

fizzBuzz(start, end, [firstMod, secondMod, firstModOutput, secondModOutput])
  returns array

    start: number to start the sequence (inclusive);
      Integer, Required
    end: Integer, number to end the sequence (inclusive);
      Integer, Required
    firstMod: First modulus number
      Integer
      Default 3
    secondMod: Second modulus number
      Integer
      Default 5
    firstModOutput: First replacement string.
      String
      Default "Fizz"
    secondModOutput: Second replacement string.
      String
      Default "Buzz"