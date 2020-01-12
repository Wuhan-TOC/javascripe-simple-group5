import Robot from './Robot'

describe('Robot save package', () => {
    test('should save to Locker2 when save pacakge Given Locker1 100% Locker2 50% ', () => {
        // Given
        const robot = new Robot(2)
        // When
        const barCode1 = robot.savePackage()
        const barCode2 = robot.savePackage()
        // Then
        expect(barCode1.lockerNumber).toEqual(1)
        expect(barCode2.lockerNumber).toEqual(2)
    })
})
