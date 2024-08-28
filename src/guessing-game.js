class GuessingGame {
  setRange(min, max) {
    this.min = min + 1;
    this.max = max - 1;
  }

  guess() {
    this.candidate = Math.round((this.min + this.max) / 2);
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
