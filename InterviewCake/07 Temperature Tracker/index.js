class TempTracker {
  constructor() {
    this.temps = [];
    this.max;
    this.min;
    this.frequencies = {};
    this.sumOfAllTemps = 0;
  }

  insert(...temps) {
    temps.forEach(temp => {
      this.temps.push(temp);

      if (this.min === undefined) {
        this.min = temp;
        this.max = temp;
      } else {
        this.min = Math.min(this.min, temp);
        this.max = Math.max(this.max, temp);
      }

      this.frequencies[temp] = (this.frequencies[temp] || 0) + 1;
      if (
        this.frequencies.highest === undefined ||
        this.frequencies[temp] >= this.frequencies[this.frequencies.highest]
      ) {
        this.frequencies.highest = temp;
      }

      this.sumOfAllTemps += temp;
    });
  }

  getMin() {
    return this.min;
  }

  getMax() {
    return this.max;
  }

  getMean() {
    return this.sumOfAllTemps / this.temps.length;
  }

  getMode() {
    if (
      this.frequencies.highest &&
      this.frequencies[this.frequencies.highest] > 1
    ) {
      return this.frequencies.highest;
    }
  }
}

module.exports = TempTracker;
