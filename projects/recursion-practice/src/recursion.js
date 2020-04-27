// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case -n return null
  // base case n = 0 return 1
  //recursive case: multiplying n by n-1 until n reaches 0
  if(n < 0){
    return null;
  }else if(n === 0){
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //Base case: if the length of the array is 0 return 0
  if(array.length === 0){
    return 0;
  }
  //Recursive case: Concat the array at the zeroith index to the call of the
  //function slicing the first element
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //checking if n is even
  // return a boolean; true for even, false for odd
  // converting the number to a positive value
  let newIn = Math.abs(n);
  //base cases
  if(newIn === 0){
    return true;
  }else if(newIn === 1){
    return false;
  }else{
    return isEven(newIn -2);//by subtracting 2 we will eventually reach either 0 or 1 and return true or false
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //BaseCase: When n equals zero return zero
  if(n === 0){
    return 0;
  //Recursive Case: When n is less than zero add 1 and add it to the call of
  //the function iterating by 1
  } else if(n < 0){
    return (n + 1) + sumBelow(n + 1);
  }
  //Recursive Case: When n is above zero subtract 1 and add it to the call of
  //the function decrementing 1 from n
  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //I: two numbers
  //O: array of values in between arguments
  //C: must be recursive
  //E: return [] if numbers === undefined
  // should accept negative integers
  // should accept starting integer greater than ending integer
  //Base Case: If x is is y-1, x is y, or x is y+1 return an empty array
  if(x === y - 1 || x === y || x === y + 1){
    return [];
    //Recursive case: else if x is greater than y decrement x by 1 
    //and concat the array to the result of the function call decrementing x by 1
  }else if(x > y){
    return [x - 1].concat(range(x - 1, y));
  }
  //Recursive case: else x is less than y increment x by 1 and concat
  //the array to the result of the function call incrementing x by 1
    return [x + 1].concat(range(x + 1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
//I: base and exponent
//O: number
//E: negative input for exp
var exponent = function(base, exp) {
  //declaring a base case. When exp = 0 we will start returning with 1 as the seed.
  if(exp === 0){
    return 1;
    // a condition for if the exponent is negative, which will require us to increment exp in the recursive case 
    // as opposed to decrement it
  }else if(exp < 0){
    return parseFloat((1 / base * exponent(base, exp + 1)).toFixed(5));
  }
  //recursive case for a positive exponent. Couldn't round so used toFixed which returns a string
  // of the desired decimal length, had to use
  //parseFloat to turn the string back into a number
  return base * exponent(base, exp - 1);
};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
//I: a number
//O: a boolean 
//C: use recursion
//E: na
var powerOfTwo = function(n) {
  //Base Case: if the number is 0 return false 
  if(n === 0){
    return false;
    //if the number is 1 return true
  }else if(n === 1){
    return true;
    //else if the number is greater than 2 and less than three return false
  }else if(n > 2 && n < 3){
    return false;
  }
  //Recursive Case: return the call of the function dividing the number by 2
  return powerOfTwo(n/2);

};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //I: a string
  //O: the string in reverse
  //C: recurse and don't mutate the given string 
  //E: NA
  //Base case: once the string is empty return it
  if(string === ''){
    return '';
  } 
  //Recursive case: concat values after the first index to the first index
  return reverse(string.substr(1)) + string.charAt(0);
  
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
 //I: string
 //O: boolean
 //C: use recursion, should ignore spaces + capital letters
 var string = string.split(' ').join('').toLowerCase();
 //Base Case: when we reach the end of a string, return empty string
 if(string.length === 0 || string.length === 1){
    return true;
 }else if(string[0] === string[string.length -1]){
   //Recursive Call
   return palindrome(string.slice(1, string.length - 1));
 }
 return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
  //I: two numbers
  //O: a number
  //C: no complex math. must use recursion
  //E: NA
  
  //Basecase: once  is zero return 0
  //Recursive Case: if y is greater than 0 add it to itself y-1 times 
  //else if y is less than 0 add it to itself y+1 times
var multiply = function(x, y) {
  if(y === 0){
    return 0;
  } else if(y > 0){
    return x + multiply(x, y-1);
  } else if (y < 0){
    return -x + multiply(x, y+1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //I: two strings
  //O: boolean
  //C: use recursion
  //E: N/A
  //Base Case: when each string is empty, we return true because the recursion only happens 
  // when the letters at 0 index of each string are strictly equal.
  if(str1 === '' && str2 === ''){
    return true;
    //if the strings at [0] are ever not strictly equal then we return false
  }else if(str1[0] !== str2[0]){
    return false;
  }
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
//I: a string
//O: an array
//C: must be recursive
//E: na
var createArray = function(str){
  //Basecase: when the string is an empty string
  if(str === ''){
    return [];
  }
  //Recursive Case: return an literal containing the string at the zeroith index
  //concatenate to the function clal slicing the 1 element
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //I: array
  //O: the input array in reverse
  //C: must use recursion
  //Base Case: when the length of the given array = 0 return 
  //the array in reverse order
  if(array.length === 0){
    return [];
  }
  //starting the recursion with the end of the array. then concat-ing the rest of the array on
  //behind it
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
  //I: two numbers
  //O: an array
  //C: use recursion
  //E: na
var buildList = function(value, length) {
  //BaseCase: when the length is zero return an empty array
  if(length === 0){
    return [];
  }
  //Recursive Case: return an array passing in the given value concatenated unto
  //the function call subtracting 1 from the length each iteration
  return [value].concat(buildList(value, length-1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //I: array, value
  //O: number
  //C: must recurse
  //E: n/a
  //BaseCase + recursive cases:
  // when array.length === 0 we return
  // during recursion, if value === the current array[0] we add 1
  // during recursion if value !== array[0] then we do nothing
  // finally when we return we start at zero and add 1 for every match
  if(array.length === 0){
    return 0;
  }if(value === array[0]){
    return 1 + countOccurrence(array.slice(1), value);
  }else{
    return countOccurrence(array.slice(1), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //I: array, function
  //O: array elements multiplied by 2
  //C: can't mutate input array, not use native map, must recurse
  //E: n/a
  //Base Case: when we have completely sliced the array the recursion should end
  if(array.length === 0){
    return [];
  }
  //recursive case: using callback to operate on array[0] and concating that with
  // the recursive function call of rMap, slicing the array until length hits 0 and calling
  //callback for each element
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.

var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
//I: the index of the number in the sequence
//O: the value at the index (number)
//C: use recursion
//E: return null for negative integers
var nthFibo = function(n) {
  //BaseCase: Edgecase if n is less than zero return null
  if(n < 0){
    return null;
  }
  //if n is 1 return 1
  if(n === 1){
    return 1;
  }
  //Recursive Case: call the function subtracting 1 from n added to another call
  //of the function subtracting 2 from n
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
//I: array of words
//O: same array with words capitalized
//C: use recursion
//E: n/a
//Base Case:if the array length is 0 return an empty array 
var capitalizeWords = function(input) {
  if(input.length === 0){
    return [];
  }
  //REcursive Case: capitalize the array at the zero index a place in a new array 
  //concatenated to the function call on the array with the first element removed 
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //I: array of strings
  //O: strings with first letter capitalized
  //C: use recursion
  //E: N/A
  //BaseCase: when the array is empty all elements have been operated on, and we return.
  if(array.length === 0){
    return [];
  }
  //Recursive Case: returning the concatenation of the upper case letter with the rest of the lowercase string
  // and putting it back into the array
  return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
//I: string
//O: object of tallies
//C: use recursion
//E: N/A
var letterTally = function(str, obj = {}) {
  //BaseCase: comparing to find if the object obj, our default parameter, contains a key string[0].
  // If it does, we increment the value at that key. If not, we create the key and assign 1 to its value.
  if(str === ''){
    return obj;
  }else if(!obj[str[0]]){
    obj[str[0]] = 1;
  }else{
    obj[str[0]] += 1;
  }
  //Recursive Case: returning the string without the first index
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
//I: array
//O: array with consecutive duplicates removed
//C: use recursion
var compress = function(list) {
  //Base Case: when every element in the array has been sliced and processed, we return an empty
  // array as our 'seed'
  if(list.length === 0){
    return [];
    //comparing list at index 1 and list at index 0. If they are not equal, we slice list[0] and concat it
    //back on to the list at the end of recursion
    // If they are equal we slice list[0] and do not concat it back on at the end of recursion
  }else if(list[0] !== list[1]){
    return [list[0]].concat(compress(list.slice(1)));
  }else if(list[0] === list[1]){
    return compress(list.slice(1));
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
//I: array
//O: array
//C: use recursion
//E: N/A
var minimizeZeroes = function(array) {
  //Base case: when we have operated on all the elements in the array, we want to return the results of our operations
  if(array.length === 0){
    return [];
    // if zeroes occur consecutively, we slice them off and do not concat them
  }else if(array[0] === 0 && array[1] === 0){
    return minimizeZeroes(array.slice(1));
    // if they do not occur consecutively, we want to keep them and concat them back into the array
    // at the end of recursion
  }else{
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7, 8,-3,1,-4]
//I: array
//O: array
//C: use recursion, first index must be positive
//E: remove all zeroes
var alternateSign = function(array) {
  //Base Case: when the array is empty we return
  if(array.length === 0){
    return [];
    //removing zeroes
  }else if(array[0] === 0){
    return alternateSign(array.slice(1));
  }else if(array[1] === 0){
    return [array[0]].concat(alternateSign(array.slice(2)));
  }else{
    //we want to convert the array at zero index to a positive, and the array
    // at index one into a negative number. Then we want to concat both of those values
    // with the array at index 2. we slice off 2 values each time.
    let zero = Math.abs(array[0]);
    let one = Math.abs(array[1]) * -1;
    return [zero].concat([one]).concat(alternateSign(array.slice(2)));
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
 let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// Base Case: when the string is empty, we return
if(str === ''){
  return '';
  // if the integer value of the string is loosely equal to the string(which a number should be)
  // then we return the corresponding string at str[0] index of the words array concat-ed with the string at 1 index
}else if(parseInt(str[0]) == str[0]){
  return words[str[0]].concat(numToText(str.slice(1)));
  // if it is not a number we concat it like usual
}else{
  return str[0].concat(numToText(str.slice(1)));
}
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
