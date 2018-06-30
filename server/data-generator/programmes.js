export default (db, chance) => {
    let id = 0;

    return db.departments.reduce(
        (acc, department) => [
            ...acc,
            ...Array.from(Array(2).keys()).map(index => {
                const height = chance.floating({ min: 10, max: 40, fixed: 2 });

                return {
                    id: id++,
                    department_id: department.id,
                    name: 'Programmes ' + id,
                };
            }),
        ],
        []
    );
};
