const SiteCache = require('./index.js');

test('Added sites return true', () => {
  var visited = new SiteCache();
  visited.add('www.google.com');
  visited.add('www.interviewcake.com');
  expect(visited.contains('www.google.com')).toBeTruthy();
  expect(visited.contains('www.interviewcake.com')).toBeTruthy();
});

test('Sites not visited return false', () => {
  var visited = new SiteCache();
  visited.add('www.bing.com');
  expect(visited.contains('www.bing.co')).toBeFalsy();
  expect(visited.contains('www.bing.com/')).toBeFalsy();
});
