import { sum } from '@solution/sum'

test('sum is correct', () => {
    const spy = jest.spyOn(console, 'log')

    sum(5)(5)

    expect(spy).toHaveBeenCalledWith(5)
    expect(spy).toHaveBeenCalledWith(10)
})
