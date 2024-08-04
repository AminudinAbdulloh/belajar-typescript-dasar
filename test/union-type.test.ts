describe('Union type', function() {
    it('should support in typescript', function() {
        let sample: string | number | boolean = "Amin";

        sample = 20;
        console.log(sample);

        sample = true;
        console.log(sample);

        // sample = []; # Error
    });

    it('should support in typescript', function() {
        
        function process(value: string | number | boolean) {
            if(typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value + 2;
            } else {
                return !value;
            }
        }

        console.log(process("Amin"));

    })
});