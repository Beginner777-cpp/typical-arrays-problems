
exports.min = function min(array) {
  if (!array) {
    return 0;
  }
  if (array.length == 0) {
    return 0;
  }
  let res = array[0];
  array.forEach(element => {
    if (res > element) {
      res = element;
    }
  });

  return res;
}

exports.max = function max(array) {
  if (!array) {
    return 0;
  }
  if (array.length == 0) {
    return 0;
  }
  let res = array[0];
  array.forEach(element => {
    if (res < element) {
      res = element;
    }
  });

  return res;
}

exports.avg = function avg(array) {
  if (!array) {
    return 0;
  }
  if (array.length == 0) {
    return 0;
  }
  let res = 0;
  array.forEach(element => {
    res += element;
  });

  return res/array.length;
}
