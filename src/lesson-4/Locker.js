import Box from './Box'
import Ticket from './Ticket'
import {
    NO_AVAILABLE_BOX,
    TAKE_PACKAGE_FAILED,
    DEFAULT_LOCKER_NUMBER,
} from './constant'
import * as _ from 'lodash'

export default class Locker {
    constructor(size, number) {
        this.boxs = []
        for (let i = 0; i < size; i++) {
            this.boxs.push(new Box(i + 1))
        }
        this.number = number || DEFAULT_LOCKER_NUMBER
    }

    hasAvailableBox() {
        return this.boxs.some((box) => box.isAvailable())
    }

    useRatio() {
        let availableAmount = 0
        for (let index = 0; index < this.boxs.length; index++) {
            if (this.boxs[index].isAvailable()) {
                availableAmount += 1
            }
        }
        return availableAmount / this.boxs.length
    }

    _findAvailableBox() {
        return this.boxs.find((box) => box.isAvailable())
    }

    savePackage(customerPackage) {
        let result = NO_AVAILABLE_BOX
        const availableBox = this._findAvailableBox()
        if (availableBox) {
            availableBox.savePackage(customerPackage)
            result = new Ticket(this.number, availableBox.number)
        }
        return result
    }

    _findBoxByBoxNumber(number) {
        return this.boxs.find((box) => box.number === number)
    }

    _isCorrectTicket(ticket) {
        const box = this._findBoxByBoxNumber(ticket.boxNumber)
        return (
            ticket instanceof Ticket &&
            ticket.lockerNumber === this.number &&
            box &&
            !box.isAvailable()
        )
    }

    takePackage(ticket) {
        let result = TAKE_PACKAGE_FAILED
        if (this._isCorrectTicket(ticket)) {
            const box = this._findBoxByBoxNumber(ticket.boxNumber)
            result = box.takePackage()
        }
        return result
    }
}
