function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i===0) {
      array.push("I am 1 strange loop.")
    } else {
      array.push("I am ${i} strange loops.")
    }
  }
  return array
}

function whileLoop(x) {
  while (x > 0) {
    console.log("The value of the number is: " + x)
    x--
  }
  return 'done'
}

fucntion doWhileLoop(array)