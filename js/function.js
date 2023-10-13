// function palindrome(str) 
// {
//   let result = str.toLowerCase()
//   return result.replaceAll(' ', '').split('').reverse().join('') == str.toLowerCase().replaceAll(' ', '');
// }

// console.log(palindrome('дед')); 
// console.log(palindrome('ИскАть таКси')); 
// console.log(palindrome('Крот'));


function FindNumber(str)
{
  return str.replace(/\D/g,'')
}

console.log(FindNumber('2023 год'));
console.log(FindNumber('1 каштан, 0.5 банана'));
console.log(FindNumber('просто строка'));

