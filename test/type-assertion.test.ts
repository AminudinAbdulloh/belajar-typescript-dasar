import { Person } from "../src/function-in-interface"

describe('Type Assertion', function() {
    it('Type Assertion in typescript', function() {
        const person: any = {
            name: "Amin",
            arge: 20
        }

        const person2: Person = person as Person;
        // person2.sayHello("Amin"); # Error

        console.info(person2)
    })
})