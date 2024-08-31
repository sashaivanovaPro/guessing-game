class GuessingGame {
  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.candidate = Math.floor((this.min + this.max) / 2);
    return this.candidate;
  }

  lower() {
    this.max = this.candidate - 1;
  }

  greater() {
    this.min = this.candidate + 1;
  }
}

module.exports = GuessingGame;

// Binary algorithm that I have used

// const binarySearchNext = (target, min, max) => {
//   while (min <= max) {
//     let guess = Math.floor((min + max) / 2);
//     console.log(guess);
//     if (guess === target) {
//       return guess;
//     } else if (guess > target) {
//       max = guess - 1;
//     } else {
//       min = guess + 1;
//     }
//   }
// };
