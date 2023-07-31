import { unique } from '@solution/unique'

describe('anagram is correct', () => {
    test('correct value', () => {
        expect(unique('abc')).toBe(true)
    })

    test('incorrect value', () => {
        expect(unique('abc-a')).toBe(false)
    })

    test('empty values', () => {
        expect(unique('')).toBe(false)
    })
})
