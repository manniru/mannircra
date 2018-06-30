export default (db, chance) => {
    let id = 0;

    return db.courses.reduce(
        (acc, course) => [
            ...acc,
            ...Array.from(Array(2).keys()).map(index => {
                return {
                    id: id++,
                    course_id: course.id,
                    name: chance.name(),
                    gender: chance.gender(),
                    birthday: chance.birthday({string: true}),
                    picture: chance.avatar({fileExtension: 'jpg'}),
                    regno:
                        course.name.substr(0, 2).toUpperCase() + '/' +
                        chance.string({ length: 5, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', }) + '/' +
                        chance.string({length: 1, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', }),
                };
            }),
        ],
        []
    );
};
