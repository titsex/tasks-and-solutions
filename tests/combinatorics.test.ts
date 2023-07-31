import { combinatorics } from '../src/solutions/combinatorics'

describe('combinatorics is correct', () => {
    test('correct value', () => {
        expect(combinatorics([1, 4, 2, 3], 5)).toEqual([
            [2, 3],
            [1, 4],
        ])

        expect(combinatorics([1, 2, 3, 4, 5, 6, 7, 8], 8)).toEqual([[8], [3, 5], [2, 6], [1, 7], [1, 3, 4], [1, 2, 5]])
    })

    test('incorrect value', () => {
        expect(combinatorics([1, 2, 3, 4], 11)).toEqual([])
    })
})
