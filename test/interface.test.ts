import { Seller } from "../src/seller"

describe('Interface', function() {
    it('should support in typescript', function() {
        const seller: Seller = {
            id: 1,
            name: "Amin",
            nib: "123456",
            npwp: "78910"
        }

        seller.name = "Aminudin",
        // seller.nib = "103948532984"; # Error

        console.info({ seller });
    });
})