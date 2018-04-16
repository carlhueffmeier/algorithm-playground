function makeChangeTopDown(amount, denominations) {
  var memory = {};

  function hash(amount, denominations) {
    return `${amount}///${denominations.join('-')}`;
  }

  function countWaysToChange(amount, denominations) {
    if (denominations.length === 0) return 0;
    if (memory[hash(amount, denominations)] !== undefined)
      return memory[hash(amount, denominations)];

    var remainder = amount;
    var numberOfWays = 0;
    while (remainder >= 0) {
      if (remainder === 0) {
        numberOfWays++;
        break;
      }
      numberOfWays += countWaysToChange(remainder, denominations.slice(1));
      remainder -= denominations[0];
    }
    memory[hash(amount, denominations)] = numberOfWays;
    return numberOfWays;
  }

  return countWaysToChange(amount, denominations);
}

function makeChangeBottomUp(amount, denominations) {
  var numberOfWays = [1];
  denominations.forEach(currentDenomination => {
    for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
      if (numberOfWays[currentAmount] === undefined) {
        numberOfWays[currentAmount] = 0;
      }
      let remainder = currentAmount - currentDenomination;
      if (remainder >= 0) {
        numberOfWays[currentAmount] += numberOfWays[remainder];
      }
    }
  });
  return numberOfWays[amount];
}

module.exports = makeChangeBottomUp;
