import { FOOT_TO_YARD_RATIO, UNIT } from './constant'
const convertToYard = (number, unit) => {
    if (UNIT.foot === unit) {
        return number / FOOT_TO_YARD_RATIO
    }
    return -1
}

export default convertToYard
