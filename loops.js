function forLoop() {
  var array;
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`"I am ${i} strange loops."`);
  }
  }
  return array
}


function whileLoop (number) {
  let num = number
  while (num >= 0) {
    console.log(num)
    num -= 1
  }
  console.log('done');
}