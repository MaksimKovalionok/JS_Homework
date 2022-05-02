// 1st Task:

function isEmpty(obj) {
  return obj != undefined ? true : false;
}
isEmpty();

// 2nd Task:

var x = +prompt('Ведите значение x');
var n = parseInt(+prompt('Ведите значение n'));

if (n === 0 || n === null || isNaN(n)) {
  do {
    n = +prompt('Ошибка. Ведите значение n');
  } while (n === 0 || n === null || isNaN(n));
}

function pow(x, n) {
  var result = x;
  for (var a = 1; a < n; a++) {
    result *= x;
  }
  return result;
}

alert(pow(x, n));

// 3rd Task:

// 1й и 3й варианты будут быстрее рекурсии (2-й вариант), так как не будут приводить к загрузке памяти хранением неоконченных вызовов.

// 1st Option:

var n = +prompt('Ведите значение n');
function sumTo(n) {
  var result = 0;
  for (var b = 0; n > b; n--) {
    result += n;
  }
  return result;
}

alert(sumTo(n));

// 2nd Option:

var n = +prompt('Ведите значение n');
function sumTo(n) {
  var result = 0;
  if (n == 0) {
    return result;
  } else {
    return (result = n + sumTo(n - 1));
    n--;
  }
}

alert(sumTo(n));

// Посчитать sumTo(100000) нельзя из-за ошибки 'Maximum call stack size exceeded'.

// 3rd Option:

var n = +prompt('Ведите значение n');
function sumTo(n) {
  var result = 0;
  for (var b = 1; b < n; b++) {
    result = ((1 + n) * n) / 2;
  }
  return result;
}

alert(sumTo(n));

// 4th Task:

var array = [NaN, 5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8, '3', {}, undefined, true];

      function threeSum(array) {
          var sum = 0;


          for (var i = 0; i < array.length; i++) {
              if (Array.isArray(array[i])) {
                  sum += threeSum(array[i]);
              } else {
                  if (typeof array[i] !== 'number' || array[i] !=array[i]) {
                      sum += 0;
                  } else {
                      sum += array[i];
                  }

              }

          }

          return sum;
      }

console.log(threeSum(array));