import Locker from './Locker'
import { NO_AVAILABLE_LOCKER, TAKE_PACKAGE_FAILED } from './constant'
import * as _ from 'lodash'

const LOCKER_SIZE = 24

export default class Robot {
    constructor(size) {
        this.lockers = []
        for (let i = 0; i < size; i++) {
            this.lockers.push(new Locker(LOCKER_SIZE, i + 1))
        }
    }

    _findAvailableLocker() {
        return this.lockers.find((locker) => locker.hasAvailableBox())
    }

    savePackage() {
        let result = NO_AVAILABLE_LOCKER
        if (!this._findAvailableLocker()) {
            return NO_AVAILABLE_LOCKER
        }
        const availableLocker = this._queryBestLocker()
        if (availableLocker) {
            result = availableLocker.savePackage()
        }
        return result
    }

    takePackage(ticket) {
        let result = TAKE_PACKAGE_FAILED
        const targetLocker = this._findAvailableLocker(ticket)
        if (!targetLocker) {
            result = targetLocker.takePackage(ticket)
        }
        return result
    }

    _findLockerByTicket(ticket) {
        return _.findKey(
            this.lockers,
            (locker) => locker.lockerNumber === ticket.lockerNumber
        )
    }

    _queryBestLocker() {
        return _.maxBy(this.lockers, (locker) => locker.useRatio())
    }
}
