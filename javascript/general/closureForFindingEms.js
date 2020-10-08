function giveMeEms(pixels) {
  var baseValue = 16;

  function doTheMath() {
    return pixels / baseValue;
  }

  return doTheMath;
}

var smSize = giveMeEms(12);
var mdSize = giveMeEms(18);
var lgSize = giveMeEms(24);
var xlSize = giveMeEms(32);

console.log("Small size: ", smSize());
console.log("Medium size: ", mdSize());
console.log("Large size: ", lgSize());
console.log("Extra Large size: ", xlSize());
