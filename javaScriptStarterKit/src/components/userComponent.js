import { ElasticLogger } from "../crossCuttingConcerns/logging/elasticLogger.js";
import { MongoLogger } from "../crossCuttingConcerns/logging/mongoLogger.js";
import User from "../models/user.js";
import { CustomerService } from "../services/customerService.js";
import { EmployeeService } from "../services/employeeService.js";

console.log("User component loaded.")

let logger1 = new MongoLogger();
let logger2 = new ElasticLogger();
let user1 = new User(1, "Engin", "Demiroğ", "Ankara",36);
let user2 = new User(1,"Esra", "Varlik", "Ankara", 23, "customer");
let employee = new EmployeeService(logger1);
let customer = new CustomerService(logger2);

logger1.log(user1);
customer.load();
customer.add(user2);
employee.load();
