import { Category, Product } from "../src/alias-type";

describe('Type Alias', function() {
    it('should support in typescript', function() {
        const category: Category = {
            id: 1,
            name: "Makanan"
        };

        const product: Product = {
            id: "1",
            name: "Cilok bakar",
            price: 5000,
            category: category,
            description: "Makanan pengganjal perut" 
        };

        // product.description = "Cemilan enak"; # Error

        console.log({ category });
        console.log({ product });
    });
});