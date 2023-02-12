// This is an example where we extend the prototype.
// String.prototype.unique = function (): boolean {
//     if (!this) return false
//     return this.split('').length === new Set(this.split('')).size
// }

/**
 * @name unique
 * @description Checks whether the text characters are unique.
 * @param {string} text
 */
export function unique(text: string): boolean {
    if (!text) return false
    return text.split('').length === new Set(text.split('')).size
}
