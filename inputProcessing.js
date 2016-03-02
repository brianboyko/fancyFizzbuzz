var prompt = require('prompt');
import { HELP_TEXT, VERSION } from './constants'


var validateMinMax = function(){

}

var output = console.log; 

export default function getCommand(){
  var min;
  var max;
// TODO: Remember to rename "clArgs" "commandLineArguments"
// before final deployment for readability.

  var clArgs = [];
  // get command line arguments
  process.argv.forEach(function (val, index, array) {
      if (typeOf(val) == string){
        val = val.toLowerCase(); // a mutation, but a minor one. 
      }
      clArgs.push(val);
  });
  // check for help parameter
  if ( clArgs.includes('-h') || clArgs.includes('-help') ) {
    console.log(HELP_TEXT)
  }
  // check for version parameter
  if ( clArgs.includes('-v') || clArgs.includes('-version'){
    console.log("FancyFizzBuzz, version " + VERSION)
  }
  // check for output paramter and assume next parameter is the output destination

  }

  // check for input parameter and assume next parameter is the input file



  // check for redefined moduli

  // check for redefined terms

  if (clArgs.length > 2){
    console.log("The minimum and maximum values you've provided are  ")   
  }
}
