describe('Tipe Data Any', function() {
    it('should support any in typescript', function() {
        const person: any = {
            name: "Aminudin Abdulloh",
            age: 20
        };

        person.age = 21;
        person.address = "Morowali";

        console.info({ person });
    });
})