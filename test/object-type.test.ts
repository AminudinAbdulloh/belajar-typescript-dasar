describe('Object Type', function() {
    it('should support in typescript', function() {
        const person: {id: string, name: string, description?: string} = {
            id: "1",
            name: "Amin"
        };

        console.info( person );

        person.id = "2";
        person.name = "Aminudin";
        person.description = "Orang ganteng"
        // person.description = "Nama orang"; # Error

        console.info({ person });

    })
})