export default class Ticket {
    constructor(lockerNumber, boxNumber) {
        this.lockerNumber = lockerNumber
        this.boxNumber = boxNumber
        this.barcode = lockerNumber + boxNumber
    }
}
