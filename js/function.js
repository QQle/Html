// 4 задача
function isPalindrome(str) {
  str = str.replace(/\s/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome('дед'));
console.log(isPalindrome('ИскАть таКси'));
console.log(isPalindrome('Крот'));


// 5 задача
function extractDigits(str) {
  let digit = str.match(/\d/g);
  if (digit === null) {
      return NaN;
  }
  return parseInt(digit.join(''), 10);
}

console.log(extractDigits('2023 год'));
console.log(extractDigits('1 каштан, 0.5 банана'));
console.log(extractDigits('просто строка'));

// 6 задача
function addPadding(str, minLength, paddingString) {
  if (str.length >= minLength) {
      return str;
    } else {
      const paddingLength = minLength - str.length;
      const changedstr = str.padStart(paddingLength+1, paddingString);
      return changedstr;
    }
}

console.log(addPadding('1', 2, '0'));
console.log(addPadding('1', 4, '0'));
console.log(addPadding('q', 4, 'werty'));
console.log(addPadding('q', 4, 'we'));
console.log(addPadding('qwerty', 4, '0'));


// 7 задача
function checkString(str, maxLength) {
  return str.length <= maxLength;
}
console.log(checkString('проверяемая', 20)); // true
console.log(checkString('проверяемая строка', 18)); // true
console.log(checkString('проверяемая строка', 10)); // false