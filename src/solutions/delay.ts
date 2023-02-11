// This is an example where we extend the prototype.
// Function.prototype.delay = function (delay: number): Function {
//     return (...args: unknown[]) => {
//         setTimeout(() => this(...args), delay)
//     }
// }

/**
 * @name delay
 * @param {Function} callback
 * @param {number} delay
 * @description Calls the function after the specified number of milliseconds.
 * @return {Function} A function that will be called after the specified delay.
 */
export function delay(callback: Function, delay: number): Function {
    return (...args: unknown[]) => {
        setTimeout(() => callback(...args), delay)
    }
}
