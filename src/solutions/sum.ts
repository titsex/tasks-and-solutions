/**
 * @name sum
 * @description A callable function that summarizes each argument passed to it.
 * @param {number} a
 * @return {Function} A function that takes the same parameters.
 */
export function sum(a: number): Function {
    console.log(a)
    return (b: number) => sum(a + b)
}
