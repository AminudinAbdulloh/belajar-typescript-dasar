import { Person } from "../src/function-in-interface"

describe('Function in Interface', function() {
    it('Function in Interface', function() {
        const person: Person = {
            name: "Aminudin Abdulloh",
            sayHello: function(name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("John Doe"));
    })
})