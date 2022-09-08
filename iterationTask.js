// 1
const products = {
  0: 'Phone',
  1: 'Tracker',
  2: 'Tv',
  [Symbol.iterator]: function () {
      let count = 0;
      
      return {
          next() {
              return {
                  value: products[count++],
                  done: count > Object.keys(products).length
              };
          }
      };
  }
};

// 2
const obj = {
  zone: true,
  word: 'test',
  skill: 'JS',
  name: 'John',
  [Symbol.iterator]: function () {
    let count = 0;
    
    return {
        next() {
            return {
                value: obj[Object.keys(obj).sort()[count++]],
                done: count > Object.keys(obj).length
            };
        }
    };
  }
};

// 3
const date = {
  [Symbol.iterator]: function () {
    let index = 0;
    let dateNow = new Date();
    let dates = [
      'FullYear',
      'Month',
      'Date',
      'Day',
      'Hours',
      'Minutes',
      'Seconds',
    ];
    return {
      next() {
        return index < dates.length ? {
          value: `${dates[index]} is ${dateNow[`get${dates[index++]}`]()}`,
          done: false,
        } : { done: true };
      }
    };
  }
};
