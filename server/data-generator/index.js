import Chance from 'chance';
import randomDateFactory from './randomDate';

// import finalize from './finalize';

//mannir
import generateSchools from './schools';
import generateDepartments from './departments';
import generateProgrammes from './programmes';
import generateCourses from './courses';
import generateApplicants from './applicants';
import generateStudents from './students';


export default ({ serializeDate } = { serializeDate: false }) => {
    const chance = new Chance();
    const randomDate = randomDateFactory(chance, serializeDate);

    const db = {};

    db.schools = generateSchools(db, chance, randomDate);
    db.departments = generateDepartments(db, chance, randomDate);
    db.programmes = generateProgrammes(db, chance, randomDate);
    db.courses = generateCourses(db, chance, randomDate);
    db.applicants = generateApplicants(db, chance, randomDate);
    db.students = generateStudents(db, chance, randomDate);
    // finalize(db, chance, randomDate);

    return db;
};
