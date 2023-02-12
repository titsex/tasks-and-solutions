/**
 * @name factorial
 * @description Well... This is factorial, I don't know what else to add
 * @param {number} num
 */
export function factorial(num: number): number {
    if (num === 0) return 1
    return num * factorial(num - 1)
}
