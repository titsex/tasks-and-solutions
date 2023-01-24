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
