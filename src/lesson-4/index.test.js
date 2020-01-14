import Robot from './Robot'
import NO_AVAILABLE_BOX from './constant'

describe('Robot save package', () => {
    test('should save to Locker2 when save package Given Locker1 100% Locker2 50% ', () => {
        // Given
        const robot = new Robot(2)
        // When
        const barCode1 = robot.savePackage()
        const barCode2 = robot.savePackage()
        // Then
        expect(barCode1.lockerNumber).toEqual(1)
        expect(barCode2.lockerNumber).toEqual(2)
    })

    test('should save failed When save package Given two full Locker', () => {
        // Given
        const robot = new Robot(2)
        const mockUseRatio = jest.fn(() => 0)
        const mockIsAvailable = jest.fn(() => false)
        jest.mock('./Locker.js', () =>
            jest.fn().mockImplementation(() => ({
                useRatio: mockUseRatio,
                hasAvailableBox: mockIsAvailable,
            }))
        )
        // When
        const barCode = robot.savePackage()
        // Then
        expect(expect(barCode).toBeDefined()).toEqual(NO_AVAILABLE_BOX)
    })
})
