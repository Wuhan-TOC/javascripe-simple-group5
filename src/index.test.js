import convertToYard from './index'
import { UNIT } from './constant'

describe('unit convert', () => {
    test('should be 1/3 when convert to yard given 1 foot', () => {
        const number = 1
        const { foot } = UNIT

        const footToYard = convertToYard(number, foot)

        expect(footToYard).toEqual(1 / 3)
    })
})
