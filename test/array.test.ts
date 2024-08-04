describe('Array', function() {
    it('should same array with javascript', function() {
        const name: string[] = ["Amin", "Udin", "Abdul", "Dulloh"];
        const values: number[] = [1, 2, 3, 4,];

        console.log(name);
        console.log(values);

    });

    it('should read only array', function() {
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.log(hobbies);

        // hobbies[0] = "Main bola"; # Error
    });

    it('should support tupple', function() {
        const person: readonly [string, number, boolean] = ["Amin", 20, true];
        console.log(person);

        // person[0] = "Budi";  # Error
    })
})