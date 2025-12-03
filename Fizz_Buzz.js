// FizzBuzz for Kids! (For Javascript beginners)
// We count from 1 to 100.
// If the number is divisible by 3 → say "Fizz"
// If the number is divisible by 5 → say "Buzz"
// If divisible by BOTH 3 and 5 → say "FizzBuzz"

for (let number = 1; number <= 100; number++) {

  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz!");
  }

  else if (number % 3 === 0) {
    console.log("Fizz!");
  }

  else if (number % 5 === 0) {
    console.log("Buzz!");
  }

  else {
    console.log(number);
  }
}
