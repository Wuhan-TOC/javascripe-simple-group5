import Locker from './Locker.js'
import Ticket from './Ticket'
import {
    NO_AVAILABLE_BOX,
    TAKE_PACKAGE_FAILED,
    DEFAULT_LOCKER_NUMBER,
} from './constant'
describe('save package', () => {
    test('should print barcode when save package given locker has box', () => {
        // given
        const locker = new Locker(1)
        // when
        const ticket = locker.savePackage()
        // then
        expect(ticket instanceof Ticket).toBeTruthy()
        expect(locker.hasAvailableBox()).toBeFalsy()
    })

    test('shouldn not print barcode when save package given locker has no available box', () => {
        // given
        const locker = new Locker(0)
        // when
        const ticket = locker.savePackage()
        // then
        expect(ticket).toBe(NO_AVAILABLE_BOX)
    })
})

describe('take package', () => {
    let locker
    beforeEach(() => {
        locker = new Locker(1)
        locker.savePackage('秘密包裹')
    })
    test('should fail when take package given invalid barcode', () => {
        // given
        const ticket = new Ticket(DEFAULT_LOCKER_NUMBER, 2)
        // when
        const result = locker.takePackage(ticket)
        // then
        expect(result).toBe(TAKE_PACKAGE_FAILED)
    })
    test('should success when take package given valid barcode', () => {
        // given
        const ticket = new Ticket(DEFAULT_LOCKER_NUMBER, 1)
        // when
        const result = locker.takePackage(ticket)
        // then
        expect(result).toEqual('秘密包裹')
    })
    test('should fail when take package given wrong locker number', () => {
        // given
        const ticket = new Ticket(2, 1)
        // when
        const result = locker.takePackage(ticket)
        // then
        expect(result).toBe(TAKE_PACKAGE_FAILED)
    })
})
