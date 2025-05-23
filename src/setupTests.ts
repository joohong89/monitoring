import '@testing-library/jest-dom'

// added as Rechart needs this to run unit test.
class ResizeObserver {
    callback: ResizeObserverCallback

    constructor(callback: ResizeObserverCallback) {
        this.callback = callback
    }

    observe(target: Element) {
        this.callback(
            [
                {
                    target,
                    contentRect: {
                        width: 500,
                        height: 300,
                        top: 0,
                        left: 0,
                        bottom: 300,
                        right: 500,
                        x: 0,
                        y: 0,
                        toJSON: () => {},
                    },
                } as ResizeObserverEntry,
            ],
            this
        )
    }

    unobserve() {}
    disconnect() {}
}

global.ResizeObserver = ResizeObserver