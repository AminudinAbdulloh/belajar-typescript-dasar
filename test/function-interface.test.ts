import { AddFunction } from "../src/function-interface"

describe('Function Interface', function() {
    it('should support in typescript', function() {
        const person: AddFunction = (name: string, age: number): string => {
            return `My name is ${name}, i am ${age} years old`;
        }

        console.log(person("Aminudin Abdulloh", 20));
    });
});