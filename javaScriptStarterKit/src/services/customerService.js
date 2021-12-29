import { users } from "../data/users.js"
import DataError from "../models/dataError.js"


export class CustomerService {
    constructor(loggerService) {
        this.customers = []
        this.customerErrors = []
        this.loggerService = loggerService
    }

    validate(user) {
        let requiredFields = "id firstName lastName city age".split(" ")
        let hasErrors = true
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.customerErrors.push(new DataError(`Validation problem ${field} is required.`, user))
            }
        }
        return hasErrors;
    }

    load() {
        for (const user of users) {
            if (user.type == "customer" && !this.validate(user)) {
                this.employees.push(user)
            }

        }
    }

    add(user){
        if(user.type == "customer"){
            this.customers.push(user)
        }
    }

    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u=>u.id === id)
    }

    getCustomerSorted(){
        this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName<customer2.firstName){
                return 1;
            }else if(customer1.firstName === customer2.firstName){
                return 0;
            }else{
                return -1;
            }
        })
    }
}