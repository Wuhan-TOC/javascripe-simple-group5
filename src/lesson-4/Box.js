const EMPTY_PACKAGE = ''

export default class Box {
    constructor(number) {
        this.number = number
        this.customerPackage = EMPTY_PACKAGE
    }

    isAvailable() {
        return this.customerPackage === EMPTY_PACKAGE
    }

    savePackage(customerPackage) {
        this.customerPackage = customerPackage
    }

    takePackage() {
        const result = this.customerPackage
        this.customerPackage = EMPTY_PACKAGE
        return result
    }
}
