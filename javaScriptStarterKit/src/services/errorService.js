import DataError from "../models/dataError"

export class ErrorService {
    constructor(loggerService) {
        this.errors = []
        this.loggerService = loggerService

    }

    load() {
        for (const user of users) {
            if (user.type != "employee" && user.type != "customer") {
                this.errors.push(new DataError("Wrong user type.", user))
            }

        }
    }

    isNumber(user) {
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem ${user.age} is not a number.`, user))
        }
        return hasErrors
    }

    add(user) {
        if (user.type != "employee" && user.type != "customer") {
            this.errors.push(new DataError("This user can not be added. Wrong user type", user))
        } else {
            this.loggerService.log(user)
        }
    }

}
