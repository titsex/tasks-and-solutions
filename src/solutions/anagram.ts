/**
 * @name anagram
 * @description Checks if two words have the same letters.
 * @param {string} word1
 * @param {string} word2
 */
export function anagram(word1: string, word2: string): boolean {
    if (!word1 || !word2) return false
    return word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('')
}
