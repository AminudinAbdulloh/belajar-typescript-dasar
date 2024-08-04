import { StringArray, StringDictionary } from "../src/indexable-interface";

describe('Indexable Interface', function() {
    it('Indexable interface Array', function() {
        const names: StringArray = ["Amin", "Udin", "Abdul", "Dulloh"];

        console.log({ names });
    });

    it('Indexable Interface Object', function() {
        const person: StringDictionary = {
            id: "1",
            name: "Aminudin Abdulloh",
            address: "Indonesia"
        }

        console.info({ person });

        expect(person['id']).toBe("1");
        expect(person['name']).toBe("Aminudin Abdulloh");
    });
});