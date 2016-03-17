const VERSION = 'v0.0.1';

const HELP_TEXT = 'Welcome to FancyFizzBuzz!, version '+ VERSION + '\r\n\r\nInstallation: \r\n==============================\r\n| $ npm run build\r\n==============================\r\n\r\nCommand Line Usage (from root directory of this project): \r\n==============================\r\n| $ node build\/main.js <first> <last> (-h, -v) [-i <filename>] \r\n|        [-o <filename>] [-m <first modulus> <second modulus>] \r\n|        [-t \u201C<first term>\u201D \u201C<second term>\u201D]\r\n==============================\r\n\r\nwhere <first> and <last> are integers. \r\n\r\n* The program can handle any integers from -999,999,999,999,999 to \r\n999,999,999,999,999. \r\n\r\nOther parameters: (case insensitive)\r\n node index.js -h (or -help)\r\n   => Read this help document\r\n node index.js -v (or -version)\r\n   => Get version info\r\n node index.js -i (or -input) [filename]\r\n   => Input min and max from text file. \r\n      This must be in the form \"#, #\"\r\n      (This is a fairly useless feature but can be expanded\r\n      to include JSON parameters for fine tuning on later features)\r\n node index.js -o (or -output) [filename]\r\n   => Output to file, instead of console\r\n node index.js -m (or -moduli) [fizz modulus] [buzz modulus]\r\n   => Define the string replacement conditions;\r\n      Defaults are 3 and 5, respectively.\r\n      Example: \r\n       $ node index.js 1 10 -m 2 5 \r\n       => \u201C1, Fizz!, 3, Fizz!, Buzz!, \r\n           Fizz!, 7, Fizz!, 9, FizzBuzz!\u201D\r\n node index.js -t (or -terms) [fizz term] [buzz term]\r\n   => Redefine the strings to replace integers with\r\n      Example: \r\n       $ node index.js 1 7 -t \u201CFoo\u201D \u201CBar\u201D \r\n       => \u201C1, 2, Foo!, 4, Bar!, 7\u201D'

export {
  VERSION,
  HELP_TEXT
}