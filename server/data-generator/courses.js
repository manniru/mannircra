export default (db, chance) => {
    let id = 0;

    return db.programmes.reduce(
        (acc, programme) => [
            ...acc,
            ...Array.from(Array(2).keys()).map(index => {
                return {
                    id: id++,
                    programme_id: programme.id,
                    name: 'Course Name ' + id,
                };
            }),
        ],
        []
    );
};
