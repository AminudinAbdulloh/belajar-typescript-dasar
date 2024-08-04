describe('Undefined', function() {
    it('should support in typescript', function() {
        
        function sayHello(name?: string | null) {
            if(name) {
                console.log(`Hello ${name}`);
            } else {
                console.log("Hello");
            }
        }

        sayHello("Amin");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);

    });
})