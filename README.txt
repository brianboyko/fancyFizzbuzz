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

* For integers larger than 9007199254740991 or less than -9007199254740991,
be sure to write your numbers as strings from the command line, by putting them
in quotes. 

Javascript can only handle numbers between -(2^53-1) and (2^53-1).

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


CHANGELOG: 
12 MARCH 2016:
======================================

Newly completed features: (Post-deadline)

* Fizzbuzz now works with numbers < -(2^53 - 1) and > (2^53 - 1), as per instructions;

* Fixed bug where calling FizzBuzz with the -h or -v flag will show a warning message. 

Still to do:

* Add responsive features so that user can quit from the command line. 

======================================
6 MARCH 2016:

While there were a number of areas where I was able to make significant progress,
I was not able to complete all the features that you asked for before the Monday deadline. 

Rather than giving you fully featured code that breaks, I decided to 
scope down, clean up the features that I felt were solid, and give that to you. 

------------------
These are completed features: 

* FizzBuzz works with any number from -999,999,999,999,999 to 999,999,999,999,999. 

* From the command line, FizzBuzz can read two numbers stored in a file and use them as inputs. 

* From the command line FizzBuzz can output to a file.

* From the command line, if no output file is specified, it defaults to
  logging to the console. 

* FizzBuzz outputs help instructions with the -h flag. 

* FizzBuzz outputs version numbers with the -v flag. 

* FizzBuzz can accept alternate moduli (other than 3 and 5).

* FizzBuzz can accept alternate strings (other than "Fizz", and "Buzz").

* FizzBuzz can be imported to another project as a library. 

------------------
These are incomplete features: 

* PRIORITY: MAJOR: FizzBuzz cannot be halted via user input from the console. 

  While Javascript has a number of event listeners for dealing with browser input,
  dealing with getting input from the command line is almost an afterthought. 

  During my research and experimentation, I was able to find a way to halt the program
  using process.stdin from this Stack Overflow:
  http://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin

  However, once process.stdin is invoked, it requires manually calling process.exit inside
  the program. And that had limited success. I would often find that trying to halt the program 
  through keypresses resulted in a hung terminal. 

  Despite spending several hours working with this method, I could not get it to perform
  to satisfaction.

  Note, however, that I did start building the program with this functionality in mind; 
  the program processes numbers in chunks of no more than 10,000 at a time. 

How I would approach this given more time: 

  Programming is knowing when to google, when to ask for help, and when to take a walk 
  around the block. I will admit that this problem has me a bit stumped, but I'm 
  confident given more time I may come up with a new angle on this. 

-----------------------

