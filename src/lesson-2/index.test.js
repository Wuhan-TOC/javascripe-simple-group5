import { Locker } from './index.js'
describe('save package', () => {
    test('should print barcode when save package given locker has box', () => {
        // given
        const locker = new Locker()
        // when
        const barcode = locker.printBarcode()
        // then
        expect(barcode).toBeGreaterThan(-1)
    })
})
