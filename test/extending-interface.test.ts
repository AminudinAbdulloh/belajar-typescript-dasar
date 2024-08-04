import { Employee, Manager } from "../src/extending-interface"

describe('Extending Interface', function() {
    it('Extending interface', function() {
        const employee: Employee = {
            id: "1",
            name: "Aminudin",
            division: "Programmer"
        }

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Abdulloh",
            division: "UI/UX",
            numberOfEmployees: 10
        }

        console.info(manager);
    })
})