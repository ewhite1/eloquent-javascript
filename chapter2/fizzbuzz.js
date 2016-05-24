// loop 1-100
// type fizz for numbers / 3
// type buzz for numbers /5
// type fizz buzz when divided by both use || operator

function fizzbuzz() {
  for (var i= 0; i < 100; i++) {
      if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz");
      } else if (i % 5 == 0) {
        console.log("buzz");
      } else if (i % 3 == 0) {
        console.log("fizz");
      }
  }
}
fizzbuzz();
