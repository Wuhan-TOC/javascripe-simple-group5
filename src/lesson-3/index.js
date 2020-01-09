import { NO_AVAILABLE_BOX } from './constant'

export class Locker {
    constructor(size) {
        this.boxSize = size
        this.max = size
    }

    savePackage() {
        let result = NO_AVAILABLE_BOX
        if (this.boxSize) {
            // eslint-disable-next-line prefer-destructuring
            result = this.boxSize
        }
        this.boxSize -= 1
        return result
    }

    takePackage(barcode) {
        let result
        if (
            typeof barcode === 'number' &&
            barcode > this.boxSize &&
            barcode <= this.max
        ) {
            this.boxSize += 1
            result = barcode
        }
        return result
    }
}
