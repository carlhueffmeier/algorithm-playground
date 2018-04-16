function mergeMeetingTimes(times) {
  var result = times.slice();
  result.sort((a, b) => a.startTime - b.startTime);

  var pointer = 1;
  var tail = 0;
  while (pointer < result.length) {
    if (result[pointer].startTime <= result[tail].endTime) {
      result[tail].endTime = Math.max(
        result[tail].endTime,
        result[pointer].endTime
      );
      pointer++;
    } else {
      tail++;
      result[tail] = result[pointer];
    }
  }
  return result.slice(0, tail + 1);
}

module.exports = mergeMeetingTimes;
