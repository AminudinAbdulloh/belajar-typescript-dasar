import { sayHello } from "../src/say-hello";

describe('Hello', function() {
    it('should say hello', function() {
        const name: string = "Amin";
        expect(sayHello(name)).toBe("Hello Amin");
    });
})