
var hash = "#";
function printTriangle() {
  for (var i= 0; i < 7; i++) {
    console.log(hash);
    hash = hash + "#";
  }
}

console.log(printTriangle());
