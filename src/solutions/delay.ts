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
 */
export function delay(callback: Function, delay: number): Function {
    return (...args: unknown[]) => {
        setTimeout(() => callback(...args), delay)
    }
}
