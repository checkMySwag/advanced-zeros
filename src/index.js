module.exports = function getZerosCount(number, base) {
  // your implementation
  onSimple = (base) => {
    let arr = [];
    let pow = 1;
    let z = 0;
    let max = base;
    for (let i = 2; i <= max + 1; i++) {
      if (base === 1) {
        return arr;
      } else {
        pow = 1;
        if (base % i === 0) {
          arr.push([i, pow]);
          while (base % i === 0) {
            arr[0 + z][1] = pow;
            base = base / i;
            pow++;
          }
          z++;
        }
      }


    }
  }
  const onSimpleResult = onSimple(base);
  advanced = (arr) => {
    let sum = [];
    for (let j = 0; j < arr.length; j++) {
      sum[j] = 0;
    }
    if (arr.length === 1) {
      let sum1 = 0;
      let dev1 = arr[0][0];
      while (Math.floor(number / dev1) !== 0) {
        sum1 += Math.floor(number / dev1);
        dev1 = dev1 * arr[0][0];
      }
      return Math.floor(sum1 / arr[0][1]);
    } else {
      let dev = 0;
      for (let i = 0; i < arr.length; i++) {
        dev = arr[i][0];
        while (Math.floor(number / dev) !== 0) {
          sum[i] += Math.floor(number / dev);
          dev = dev * arr[i][0];
        }
        sum[i] = Math.floor(sum[i] / arr[i][1]);
      }
      sum.sort((a, b) => {
        return a - b;
      })
      return sum[0];
    }
  }
  return advanced(onSimpleResult);
}