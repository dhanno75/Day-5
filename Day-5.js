// 1)

// a) Print odd numbers in an array
// IIFE
(function (arr) {
  let odd = [];
  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  console.log(odd);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Output: [1, 3, 5, 7, 9]

// Anonymous function
const findOddNumbers = function (arr) {
  let odd = [];
  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  return odd;
};

console.log(findOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: [1, 3, 5, 7, 9]

// b) Convert all the strings to title caps in a string array
// IIFE function
(function (arr) {
  let titleCaps = arr.map((el) => el[0].toUpperCase() + el.slice(1));
  console.log(titleCaps);
})(["earth", "mars", "home", "trees", "pollution"]);

// Output: ["Earth", "Mars", "Home", "Trees", "Pollution"]

// Anonymous function
const titleCaps = function (arr) {
  let titleCaps = arr.map((title) => title[0].toUpperCase() + title.slice(1));
  return titleCaps;
};

console.log(titleCaps(["earth", "mars", "home", "trees", "pollution"]));
// Output: ["Earth", "Mars", "Home", "Trees", "Pollution"]

// c) Sum of all numbers in an array
// IIFE
(function (arr) {
  let sum = 0;
  arr.forEach(function (num) {
    sum += num;
  });
  console.log(sum);
})([3, 9, 27, 13, 82, 20, 61]);

// Output: 215

// Anonymous function
const sumOfAllNumbers = function (arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

console.log(sumOfAllNumbers([3, 9, 27, 13, 82, 20, 61]));
// Output: 215

// d) Return all the prime numbers in an array
// IIFE
(function (arr) {
  let primes = [];
  arr.forEach((num) => {
    let factor = 0;
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      primes.push(num);
    }
  });
  console.log(primes);
})([5, 17, 8, 11, 84, 90, 101]);
// Output: [5, 17, 11, 101]

// Anonymous function
const allPrimes = function (arr) {
  let primes = [];
  arr.forEach((num) => {
    let factor = 0;
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      primes.push(num);
    }
  });
  return primes;
};
console.log(allPrimes([5, 17, 8, 11, 84, 90, 101]));
// Output: [5, 17, 11, 101]

// e) Return all the palindromes in an array
// IIFE
(function (arr) {
  let palindromes = [];
  for (let str of arr) {
    // for (let k = 0; k < arr.length; k++) {
    let reversedWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedWord += str[i];
    }

    if (str === reversedWord) {
      palindromes.push(reversedWord);
    }
  }
  console.log(palindromes);
})([
  "grass",
  "level",
  "computer",
  "radar",
  "racecar",
  "bicycle",
  "table",
  "reviver",
]);

// Output: ['level', 'radar', 'racecar', 'reviver']

// Anonymous function
const palindromes = function (arr) {
  let palindromeWords = arr.filter(function (str) {
    let reversedString = "";
    for (let j = str.length - 1; j >= 0; j--) {
      reversedString += str[j];
    }
    if (str === reversedString) {
      return reversedString;
    }
  });

  return palindromeWords;
};

console.log(
  palindromes([
    "grass",
    "level",
    "computer",
    "radar",
    "racecar",
    "bicycle",
    "table",
    "reviver",
  ])
);
// Output: ['level', 'radar', 'racecar', 'reviver']

// f) Return median of two sorted arrays of the same size
// IIFE
(function (arr1, arr2) {
  let arr3 = arr1.concat(arr2).sort((a, b) => a - b);
  let m1, median;
  if (arr3.length % 2 === 0) {
    m1 = arr3.length / 2;
    median = (arr3[m1] + arr3[m1 - 1]) / 2;
  }
  console.log(median);
})([9, 16, 45, 33, 1], [22, 13, 97, 6, 2]);

// Output 14.5

// Anonymous function
const median = function (arr1, arr2) {
  let arr3 = arr1.concat(arr2).sort((a, b) => a - b);
  let m1, median;
  if (arr3.length % 2 === 0) {
    m1 = arr3.length / 2;
    median = (arr3[m1] + arr3[m1 - 1]) / 2;
  }
  return median;
};

console.log(median([9, 16, 45, 33, 1], [22, 13, 97, 6, 2]));
// Output 14.5

// g) Remove duplicates from an array
// IIFE
(function (arr) {
  const newSet = new Set(arr);
  console.log([...newSet]);
})(["dog", "deer", "monkey", "elephant", "deer", "monkey", "tiger"]);

// Anonymous function
const removeDuplicates = function (arr) {
  const removingDuplicates = new Set(arr);
  return [...removingDuplicates];
};
console.log(
  removeDuplicates([
    "dog",
    "deer",
    "monkey",
    "elephant",
    "deer",
    "monkey",
    "tiger",
  ])
);
// Output: ['dog', 'deer', 'monkey', 'elephant', 'tiger']

console.log(removeDuplicates([3, 1, 5, 2, 6, 4, 3, 2, 4, 1, 9, 9, 6, 7, 2]));
// Output: [3, 1, 5, 2, 6, 4, 9, 7]

// h) Rotate an array by k times
// IIFE
(function (arr, k) {
  const revArr = function (arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  k = k % arr.length;
  arr.reverse();
  revArr(arr, 0, k - 1);
  revArr(arr, k, k.length - 1);
  console.log(arr);
})([1, 3, 4, 2, 5], 2);

// Anonymous function
const revArr = function (arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

const rotate = function (arr, k) {
  k = k % arr.length;

  arr.reverse();
  revArr(arr, 0, k - 1);
  revArr(arr, k, k.length - 1);
  return arr;
};

console.log(rotate([1, 3, 4, 2, 5], 2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2) Programs in arrow functions
// a) Print odd numbers in an array
const GetOddNumbers = (arr) => {
  let odd = [];
  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  return odd;
};

console.log(GetOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: [1, 3, 5, 7, 9]

// b) Convert all the strings to title caps in a string array
const titleUppercase = (arr) => {
  let titleUppercase = arr.map(
    (title) => title[0].toUpperCase() + title.slice(1)
  );
  return titleUppercase;
};

console.log(titleUppercase(["earth", "mars", "home", "trees", "pollution"]));
// Output: ["Earth", "Mars", "Home", "Trees", "Pollution"]

// c) Sum of all numbers in an array
const sum_of_all_numbers = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

console.log(sum_of_all_numbers([3, 9, 27, 13, 82, 20, 61]));
// Output: 215

// d) Return all the prime numbers in an array
const allPrimeNumbers = (arr) => {
  let primes = [];
  arr.forEach((num) => {
    let factor = 0;
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      primes.push(num);
    }
  });
  return primes;
};
console.log(allPrimeNumbers([5, 17, 8, 11, 84, 90, 101]));
// Output: [5, 17, 11, 101]

// e) Return all the palindromes in an array
const palindrome = (arr) => {
  let palindromeWords = arr.filter(function (str) {
    let reversedString = "";
    for (let j = str.length - 1; j >= 0; j--) {
      reversedString += str[j];
    }
    if (str === reversedString) {
      return reversedString;
    }
  });

  return palindromeWords;
};

console.log(
  palindrome([
    "grass",
    "level",
    "computer",
    "radar",
    "racecar",
    "bicycle",
    "table",
    "Reviver",
  ])
);
// Output: ['level', 'radar', 'racecar', 'reviver']
