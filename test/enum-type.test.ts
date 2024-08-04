import { Customer, Customertype } from "../src/enum-type";

describe('Enum Type', function() {
    it('should support in typescript', function() {
        const customer: Customer = {
            id: "1",
            name: "Amin",
            type: Customertype.PLATINUM
        }

        console.info({ customer });
    })
});