// This is an example where we extend the prototype.
// Function.prototype.debounce = function (time: number): Function {
//     let timer: null | number = null
//
//     return (...args: unknown[]) => {
//         if (timer) clearTimeout(timer)
//         timer = setTimeout(() => this(...args), time);
//     }
// }

/**
 * @name debounce
 * @param {Function} callback
 * @param {number} time
 * @description Calls the function only once during the specified time period.
 * @return {Function} A function that will be called only once in the specified time.
 */
export function debounce(callback: Function, time: number): Function {
    let timer: null | NodeJS.Timeout = null

    return (...args: unknown[]) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => callback(...args), time)
    }
}
