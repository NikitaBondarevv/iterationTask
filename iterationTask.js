// 1
const products = {
  0: 'Phone',
  1: 'Tracker',
  2: 'Tv',
  [Symbol.iterator]: function () {
      let count = 0;
      const productsLength = Object.keys(products).length;
      
      return {
          next() {
              return {
                  value: products[count++],
                  done: count > productsLength
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
    const objLength = Object.keys(obj).length;
    const objSorted = Object.keys(obj).sort();
    
    return {
        next() {
            return {
                value: obj[objSorted[count++]],
                done: count > objLength
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
        if (index < dates.length) {
          return {
            value: `${dates[index]} is ${dateNow[`get${dates[index++]}`]()}`,
            done: false
          };
        } else {
          return { done: true };
        }
      }
    };
  }
};
