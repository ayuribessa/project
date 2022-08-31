import StudentRepository from "../database/repositories/studentRepository.js";

export class StudentService {
    constructor() {
        this.repository = new StudentRepository();
    }

    async getAllStudents() {
        return this.repository.findAll();
        ;
    }
};
