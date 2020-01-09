import { Locker } from './index.js'
import { NO_AVAILABLE_BOX } from './constant'
describe('save package', () => {
    test('should print barcode when save package given locker has box', () => {
        // given
        const locker = new Locker(24)
        // when
        const barcode = locker.savePackage()
        // then
        expect(barcode).toBeGreaterThan(0)
    })

    test('shouldn not print barcode when save package given locker has no available box', () => {
        // given
        const locker = new Locker(0)
        // when
        const barcode = locker.savePackage()
        // then
        expect(barcode).toBe(NO_AVAILABLE_BOX)
    })
})

describe('take package', () => {
    let locker
    beforeEach(() => {
        locker = new Locker(24)
        locker.savePackage()
    })
    test('should fail when take package given invalid barcode', () => {
        // given
        const barcode = 'hahahah'
        // when
        const result = locker.takePackage(barcode)
        // then
        expect(result).toBeUndefined()
    })
    test('should success when take package given valid barcode', () => {
        // given
        const barcode = 24
        // when
        const result = locker.takePackage(barcode)
        // then
        expect(result).toEqual(barcode)
    })
})
