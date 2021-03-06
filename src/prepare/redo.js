// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin/

function translatePigLatin(str) {
  let tempchar = '';
  let strArr = [];

  function isConsonant(letter) {
    if (!letter) return false;
    return !/[aieou]/.test(letter);
  }

  if (!isConsonant(str.charAt(0))) {
    console.log('met');
    return str + 'way';
  } else if (str.match(/[aeiou]/gi) === null) {
    console.log('met');
    return str + 'ay';
  } else {
    strArr = str.split('');
    console.log('met');
    while (isConsonant(strArr[0])) {
      tempchar = strArr.shift();
      strArr.push(tempchar);
    }
  }
  return strArr.join('') + 'ay';
}
console.log(translatePigLatin('glove')); //oveglay
console.log(translatePigLatin('eight'));

// ------------------------------------------------------------------------------------------------------------------- //

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

// function steamrollArray(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArr = newArr.concat(steamrollArray(arr[i]))
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(steamrollArray([1, [2], [3, [[4]]]]));
