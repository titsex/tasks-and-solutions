// A function that is called after the specified delay.
import { someFnWithDelay } from '@solution/delay'
someFnWithDelay('1', 2, [3])

// A function that is called only once during the specified period.
import { someFnWithDebounce } from '@solution/debounce'
someFnWithDebounce('1', 2, [3])
someFnWithDebounce('2', 3, [4])
someFnWithDebounce('3', 4, [5]) // Only this function will be called

// A function that checks whether a word is a palindrome.
import { palindrome } from '@solution/palindrome'
console.log(palindrome('test')) // false
console.log(palindrome('Anna')) // true

// A function that checks if two words have the same letters.
import { anagram } from '@solution/anagram'
console.log(anagram('beast', 'zoo')) // false
console.log(anagram('heart', 'earth')) // true

// Fibonacci
import { fibonacci } from '@solution/fibonacci'
console.log(fibonacci(7)) // 13

// A callable function that sums up all the arguments passed.
import { sum } from '@solution/sum'
console.log(sum(5)(5)(3)) // 13

// A function that checks the uniqueness of text characters.
import { unique } from '@solution/unique'
console.log(unique('hello')) // false
console.log(unique('cow')) // true

// A function that takes in an array and returns a one-dimensional array.
import { flatten } from '@solution/flatten'
console.log(flatten([1, [2], [[[[[[4, [5]]]], [7]]]]])) // [1, 2, 4, 5, 7]

//
import { brackets } from '@solution/brackets'
console.log(brackets('{ a: [1, 2], b: () => { console.log(1) } {{ }'), 'dsa')
