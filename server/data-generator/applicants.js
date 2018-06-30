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
                    phone: chance.phone({ country: 'uk', mobile: true }),
                    email: chance.email({domain: "manniru.com"}),
                    address: chance.address(),
                    city: chance.city(),
                    state: chance.state({ country: 'us' }),
                    country: chance.country({ full: true }),

                    picture: chance.avatar({fileExtension: 'jpg'}),
                    regno:
                        course.name.substr(0, 2).toUpperCase() + '/' +
                        chance.string({ length: 5, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', }) + '/' +
                        chance.string({length: 1, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', }),
                    status: chance.bool({likelihood: 90}),
                    timestamp: chance.timestamp(),
                    ip: chance.ip(),
                };
            }),
        ],
        []
    );
};
