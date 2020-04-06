function forLoop() {
  var array;
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      var array = [...array, "I am 1 strange loop."];
    } else {
      var array = [...array, `"I am ${i} strange loops."`];
  }
  }
  return array
}
