import Locker from './Locker'
import { LOCKER_SIZE } from './constant'
import * as _ from 'lodash'

export default class RobotManager {
    constructor(size) {
        this.managers = []
        for (let index = 0; index < size; index++) {
            this.managers.push(new Locker(LOCKER_SIZE))
        }
    }

    queryBestLocker() {
        return _.maxBy(this.managers, (locker) => {
            return locker.useRatio()
        })
    }
}
