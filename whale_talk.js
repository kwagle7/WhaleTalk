//Title:  Whale talk @kwagle 
//This task is part of Codeacademy, and following is my code when solving this exercise.
// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

// There are a few simple rules for translating text to whale language:

// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.


let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];

resultArray = [];
let count = 0;
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j] && input[i] === 'u') {
            resultArray.push('uu');
        }
        else if (input[i] === vowels[j] && input[i] === 'e') {
            resultArray.push('ee');
        }
        else if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}
console.log(resultArray);
//output
// [
//     'uu', 'ee', 'i',
//     'ee', 'a',  'uu',
//     'ee'
//   ]

console.log(resultArray.join('').toUpperCase());
//output UUEEIEEAUUEE
