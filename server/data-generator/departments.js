export default (db, chance) => {
    let id = 0;

    return db.schools.reduce(
        (acc, school) => [
            ...acc,
            ...Array.from(Array(5).keys()).map(index => {
                const width = chance.floating({ min: 10, max: 40, fixed: 2 });
                const height = chance.floating({ min: 10, max: 40, fixed: 2 });

                return {
                    id: id++,
                    name: 'Deparment Name '+ id,
                    school_id: school.id,
                };
            }),
        ],
        []
    );
};
