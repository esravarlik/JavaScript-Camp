import { users } from "../data/users.js"
import DataError from "../models/dataError.js"


export class EmployeeService {
    constructor(loggerService) {
        this.employees = []
        this.loggerService = loggerService
        this.employeeErrors = []
    }


    validate(user) {
        let requiredFields = "id firstName lastName city age".split(" ")
        let hasErrors = true
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.employeeErrors.push(new DataError(`Validation problem ${field} is required.`, user))
            }
        }
        return hasErrors;
    }

    load() {
        for (const user of users) {
            if (user.type == "employee" && !this.validate(user)) {
                this.employees.push(user)
            }

        }
    }

    add(user){
        if(user.type == "employee"){
            this.employees.push(user)
        }
    }

    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u=>u.id === id)
    }

    getEmployeeSorted(){
        this.employees.sort((employee1,employee2)=>{
            if(employee1.firstName<employee2.firstName){
                return 1;
            }else if(employee1.firstName === employee2.firstName){
                return 0;
            }else{
                return -1;
            }
        })
    }
}