describe('If and Switch Statement', function() {
    it('should support if Statement in typescript', function() {
        const examValue: number = 90;

        if (examValue > 80) {
            console.info('GOOD');
        } else if (examValue > 60) {
            console.info("Not Bad");
        } else {
            console.info("Try Again");
        }
    });

    it('should support trnary operator in typescript', function() {
        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again";

        console.info(say);
    });

    it('should support switch Statement in typescript', function() {
        function sayHello(name?: string): string {
            switch(name) {
                case "Amin" :
                    return "Hi Amin";
                case "Udin" :
                    return "Hi Udin";
                default :
                    return "Hello Guest";
            }
        }

        console.info(sayHello());
        console.info(sayHello("Amin"));
        console.info(sayHello("Udin"));
    });
});