//Number one

function findGreatest(array, num) {
      let result = [];
    for (let i = 0; i < array.length; i++) {
       if (array[i] > num) {
         result.push(array[i]);
        }
      }
       return result.join(" ");
    }


console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

    //Method 2 
/* function findGreatest(array, num) {
    let result = [];
    for (let item of array) {
      if (item > num) {
        return item;
        result.push(item);
      }
    }
    return result.join(" ");
  }
 */


//Number two
//For the longest word. Create a function to find the longest word in a given string.

//i.e. longestWord("this is a web development course") ➞ "development"

const longestWord = (string) => {
return string.split(' ').reduce((initiaValue,currentValue) => {
    if (initiaValue.length < currentValue.length) {
     initiaValue = currentValue
    }
    return initiaValue
}, '')
}
console.log(longestWord('this is a web development course'));
//longestWord ()

/* function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
    if (longest < str[i].length) {
    longest = str[i].length;
    word = str[i];
    }
    }
    return word;

    }  */

    // Method two

  /*   let string = "Hello i'm the string!"

const splitString = (string) => {
return string.split(" ")
}

console.log(splitString(string));
 */
//comparing stringlength in the array 

//Number 3
//Create a function to reverse a number

const reverse = (number) => {
    return number.toString().split('').reverse().join('');
}
console.log(reverse(34532));

//Number 4
//AEIOU Vowels
// Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.

const vowels = (param) => {
let vowel = ['a','e','i','o','u']
let count = 0;
for (let i = 0; i < param.length; i++) {
  if (vowel.includes(param[i])) {
    count ++;

  }
  
}
return count;
}
console.log(vowels('ann'));






/*  let _vowelCount_ = function (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
       if (str[i] == 'a' || str[i] == 'i' || str[i] == 'o' || str[i] == 'e' || str[i] == 'u') {
          count++; 
       }
        return count;
    }
}
    console.log(_vowelCount_('aioeu'));  */



