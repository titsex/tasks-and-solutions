import { palindrome } from '@solution/palindrome'

describe('anagram is correct', () => {
    test('correct value', () => {
        expect(palindrome('mom')).toBe(true)
    })

    test('incorrect value', () => {
        expect(palindrome('test')).toBe(false)
    })

    test('empty values', () => {
        expect(palindrome('')).toBe(false)
    })
})
