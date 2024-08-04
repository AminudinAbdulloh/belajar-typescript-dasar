describe('Function In Typescript', function() {
    it('Function', function() {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello('Amin')).toBe('Hello Amin');
        console.info(sayHello('Amin'));

        function printHello(name: string): void {
            console.log(`Hello ${name}`);
        }

        printHello('Udin');
    });

    it('should support default value', function() {
        function sayHello(name: string = 'Guest') {
            return `Hello ${name}`;
        }

        expect(sayHello("Amin")).toBe("Hello Amin");
        expect(sayHello()).toBe("Hello Guest");
    });

    it('should support rest parameter', function() {
        const sum = (...values: number[]): number => {
            let total: number = 0;

            for (const value of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support optional parameter', function() {
        const sayHello = (first_name: string, last_name?: string): string => {
            if(last_name) {
                return `Hello ${first_name} ${last_name}`;
            }

            return `Hello ${first_name}`;
        }

        expect(sayHello("Aminudin")).toBe("Hello Aminudin");
        expect(sayHello("Aminudin", "Abdulloh")).toBe("Hello Aminudin Abdulloh");
    });

    it('shoul support function overloading', function() {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if(typeof value === 'number') {
                return value * 10;
            } else if(typeof value === 'string') {
                return value.toUpperCase();
            }
        }

        expect(callMe(10)).toBe(100);;
        expect(callMe("Amin")).toBe("AMIN");
    });

    it('should support function as parameter', function() {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Amin", toUpper)).toBe("Hello AMIN");
    });

    it('should support anonymous function', function() {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        expect(sayHello("Amin", function (name: string): string {
            return name.toUpperCase();
        })).toBe("Hello AMIN");

        expect(sayHello("Amin", (name: string) => name.toUpperCase())).toBe("Hello AMIN");
    });

    it('should support arrow function', function() {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        expect(sayHello("Amin", (name: string) => name.toUpperCase())).toBe("Hello AMIN");
    });
})