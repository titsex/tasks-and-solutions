/**
 * @name sum
 * @description A callable function that summarizes each argument passed to it.
 * @param {number} a
 */
export function sum(a: number): Function {
    console.log(a)
    return (b: number) => sum(a + b)
}
