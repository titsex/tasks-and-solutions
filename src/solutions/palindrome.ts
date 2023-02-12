// This is an example where we extend the prototype.
// String.prototype.palindrome = function (): boolean {
//     if (!this) return false
//     return this.toLowerCase() === this.toLowerCase().split('').reverse().join('')
// }

/**
 * @name palindrome
 * @param {string} word
 * @description Checks whether a word is a palindrome.
 */
export function palindrome(word: string): boolean {
    if (!word) return false
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}
