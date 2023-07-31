import { debounce } from '@solution/debounce'

jest.useFakeTimers()

describe('debounce is correct', () => {
    let func: jest.Mock
    let debouncedFunc: Function

    beforeEach(() => {
        func = jest.fn()
        debouncedFunc = debounce(func, 1000)
    })

    test('execute just once', () => {
        for (let i = 0; i < 100; i++) {
            debouncedFunc()
        }

        jest.runAllTimers()

        expect(func).toBeCalledTimes(1)
    })
})
