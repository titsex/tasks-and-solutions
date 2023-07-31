import { delay } from '@solution/delay'

jest.useFakeTimers()

describe('debounce is correct', () => {
    let func: jest.Mock
    let delayedFunc: Function

    beforeEach(() => {
        func = jest.fn()
        delayedFunc = delay(func, 1000)
    })

    test('completed in 1000 milliseconds', () => {
        delayedFunc()

        jest.advanceTimersByTime(1000)

        expect(func).toHaveBeenCalled()
    })
})
