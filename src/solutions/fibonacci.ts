/**
 * @name fibonacci
 * @description Well... This is fibonacci, I don't know what else to add
 * @param {number} num
 * @return {number} result
 */
export function fibonacci(num: number): number {
    if (num < 2) return num
    return fibonacci(num - 1) + fibonacci(num - 2)
}
