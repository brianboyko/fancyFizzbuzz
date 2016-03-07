var fizzbuzzer = function (number, fizzer = 3, buzzer = 5, fizzOutput = "Fizz", buzzOutput = "Buzz") {
    // Technically speaking, 0 % any number will return true, but we don't particularly think
    // of 0 as being "divisible" by anything. This should default to "0"; 
    if (number == 0){
        return 0;
    } else if ((number % fizzer === 0) && (number % buzzer === 0)){
        return "" + fizzOutput + buzzOutput + '!'
    } else if (number % fizzer === 0) {
        return (fizzOutput + "!")
    } else if (number % buzzer === 0) {
        return (buzzOutput + "!");
    } else {
        return number;
    }
}

var createFizzBuzz = function (start, end, fizzer = 3, buzzer = 5, fizzOutput = "Fizz", buzzOutput = "Buzz")  {
    var output = []; 
    var incre = 1; 
    if (start > end) {
      incre = -1;
    }
    var earlyBreak = false; 

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('keypress', function(key){
      console.log(key);
      if(key.name == 'q'){
        earlyBreak = true
      }
    });


    for (var i = start; (end >= start) ? (i <= end) : (i >= end) ; i = i + incre) {
      console.log("i", i)
        output.push(fizzbuzzer(i, fizzer, buzzer, fizzOutput, buzzOutput));
        // check to see if we've aborted via user input; 
        if(earlyBreak){
          return { earlyBreak, output }; 
        }
    }
    return { earlyBreak, output }; ; 
}

export {
    fizzbuzzer,
    createFizzBuzz
}
