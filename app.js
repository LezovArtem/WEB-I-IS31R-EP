function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(toFahrenheit(0));
console.log(toFahrenheit(25));

function isPrime(num) {
  if (num % 2 == 0 && num > 2) return false;
  const s = Math.sqrt(num);
  for(let i = 3; i <= s; i += 2) {
      if(num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));

function doubleArray(arr) {
    return arr.map((item) => {
        return item * 2;
    })
}

console.log(doubleArray([1, 2, 3]));
console.log(doubleArray([0, 2, 4]));

function getObjectKeys(obj) {
    return Object.keys(obj);
}

console.log(getObjectKeys({name: 'Alice', age: 25}));
console.log(getObjectKeys({a: 1, b: 2, c: 3}));

function countOccurrences(arr, value) { 
    let count = 0;
    arr.forEach(el => {
        if (el == value) {
            count++;
        }
    });

    return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));   // Output: 3
console.log(countOccurrences(['a', 'b', 'a', 'c'], 'a')); // Output: 2

function mergeObjects(obj1, obj2) {
    return ({...obj1, ...obj2});
}

console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4}));  // Output: { a: 1, b: 3, c: 4 });
