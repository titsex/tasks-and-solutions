/**
 * @name combinatorics
 * @description Finds all possible combinations of numbers from an array of numbers
 * @param {number[]} numbers
 * @param {number} number
 */
export function combinatorics(numbers: number[], number: number): number[][] {
    const sortedNumbers: number[] = numbers.sort((a, b) => a - b)

    const result: number[][] = []
    const stack: IStack[] = [{ index: 0, summary: 0, combination: [] }]

    while (stack.length > 0) {
        const { index, summary, combination } = stack.pop()!

        if (summary === number) {
            result.push([...combination])
            continue
        }

        for (let i = index; i < sortedNumbers.length; i++) {
            const item = sortedNumbers[i]

            if (item <= number - summary && !combination.includes(item))
                stack.push({
                    index: i + 1,
                    summary: summary + item,
                    combination: [...combination, item],
                })
        }
    }

    return result
}

interface IStack {
    index: number
    summary: number
    combination: number[]
}
