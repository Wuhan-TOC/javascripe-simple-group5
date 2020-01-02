export class Locker {
    constructor() {
        this.box = 24
    }

    printBarcode() {
        this.box -= 1
        return this.box
    }
}
