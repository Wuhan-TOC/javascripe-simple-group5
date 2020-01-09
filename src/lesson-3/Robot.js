import Locker from '../lesson-2/Locker'
import { NO_AVAILABLE_LOCKER } from './constant'

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
        const availableLocker = this._findAvailableLocker()
        if (availableLocker) {
            result = availableLocker.savePackage()
        }
        return result
    }
}
