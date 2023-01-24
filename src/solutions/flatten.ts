// This is an example where we extend the prototype.
// Array.prototype.flatten = function (): unknown[] {
//     const result: unknown[] = []
//
//     for (const key of this) {
//         if (Array.isArray(key)) flatten(key).map((item: unknown) => result.push(item))
//         else result.push(key)
//     }
//
//     return result
// }

/**
 * @name flatten
 * @description Iterates through nested arrays and returns a one-dimensional array with values.
 * @param {Array} array
 * @return {Array} One-dimensional array
 */
export function flatten(array: unknown[]): unknown[] {
    const result: unknown[] = []

    for (const key of array) {
        if (Array.isArray(key)) flatten(key).map((item: unknown) => result.push(item))
        else result.push(key)
    }

    return result
}
