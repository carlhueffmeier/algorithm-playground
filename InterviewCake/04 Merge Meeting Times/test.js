const mergeMeetingTimes = require('./index.js');

test('mergeMeetingTimes returns the correct result', () => {
  const meetingTimes = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
  ];
  const solution = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 }
  ];
  const result = mergeMeetingTimes(meetingTimes);
  expect(result).toEqual(solution);
});

test('mergeMeetingTimes merges touching meetings without overlap', () => {
  const meetingTimes = [
    { startTime: 1, endTime: 2 },
    { startTime: 2, endTime: 3 }
  ];
  const solution = [{ startTime: 1, endTime: 3 }];
  const result = mergeMeetingTimes(meetingTimes);
  expect(result).toEqual(solution);
});

test('mergeMeetingTimes merges meetings that are within one another', () => {
  const meetingTimes = [
    { startTime: 1, endTime: 5 },
    { startTime: 2, endTime: 3 }
  ];
  const solution = [{ startTime: 1, endTime: 5 }];
  const result = mergeMeetingTimes(meetingTimes);
  expect(result).toEqual(solution);
});

test('mergeMeetingTimes correctly handles ongoing merges', () => {
  const meetingTimes = [
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 }
  ];
  const solution = [{ startTime: 1, endTime: 10 }];
  const result = mergeMeetingTimes(meetingTimes);
  expect(result).toEqual(solution);
});
