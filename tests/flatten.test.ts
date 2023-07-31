import { flatten } from '@solution/flatten'

describe('anagram is correct', () => {
    test('correct value', () => {
        expect(flatten([1, [2], [[3]], [[[4]]], [[[[5]]]]])).toStrictEqual([1, 2, 3, 4, 5])
    })

    test('empty param', () => {
        expect(flatten([])).toStrictEqual([])
    })
})
