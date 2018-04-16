function getMaxProfit(prices) {
  if (prices.length < 2) {
    throw new Error('prices have to include at least two elements');
  }

  var buyPrice = prices[0];
  var maxProfit = prices[1] - buyPrice;

  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - buyPrice);
    buyPrice = Math.min(buyPrice, prices[i]);
  }
  return maxProfit;
}

module.exports = getMaxProfit;
