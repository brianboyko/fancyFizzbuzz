'Welcome to FancyFizzBuzz!, version VERSION
Usage: node index.js <first> <last> (-h, -v) [-i <filename>] 
       [-o <filename>] [-m <first modulus> <second modulus>] 
       [-t “<first term>” “<second term>”]

where <first> and <last> are either intergers or a number
written as a string (with quotes around it) 

NOTER: For numbers greater than 999,999,999,999,999, or less than 
-999,999,999,999,999, you must place the number inside quotes, otherwise the program may not process the number correctly. 

Other parameters: (case insensitive)
 node index.js -h (or -help)
   => Read this help document
 node index.js -v (or -version)
   => Get version info
 node index.js -i (or -input) [filename]
   => Input min and max from text file. 
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
 
 Other features: 
  - Hit q at any time to terminate a running fizzbuzz process.'
