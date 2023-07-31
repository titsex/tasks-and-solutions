import { anagram } from '@solution/anagram'

describe('anagram is correct', () => {
    test('correct value', () => {
        expect(anagram('abc', 'abc')).toBe(true)
        expect(anagram('abc', 'bca')).toBe(true)
    })

    test('incorrect value', () => {
        expect(anagram('abc', 'def')).toBe(false)
    })

    test('empty values', () => {
        expect(anagram('', '')).toBe(false)
    })
})
