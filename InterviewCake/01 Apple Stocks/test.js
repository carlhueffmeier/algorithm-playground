const getMaxProfit = require('./index.js');

test('getMaxProfit works when there is a profit to be made', () => {
  const stockPricesYesterday = [10, 7, 5, 8, 11, 9];
  const stockPricesTheDayBeforeYesterday = [100, 180, 260, 310, 40, 535, 695];

  // should be 6 (buying for $5 and selling for $11)
  expect(getMaxProfit(stockPricesYesterday)).toEqual(6);

  // should be 655 (buying for $40 and selling for $695)
  expect(getMaxProfit(stockPricesTheDayBeforeYesterday)).toEqual(655);
});

test('getMaxProfit works when prices continue to drop', () => {
  const stockPricesOnABadDay = [20, 15, 12, 9, 5, 1];

  // should be -3 (buying for $15 and selling for $12)
  expect(getMaxProfit(stockPricesOnABadDay)).toEqual(-3);
});
