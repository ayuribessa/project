import StudentRepository from "../database/repositories/studentRepository.js";

export class StudentService {
    constructor() {
        this.repository = new StudentRepository();
    }

    async getAllStudents() {
        return this.repository.findAll();
    }

    async getStudentById(id) {
        return this.repository.findById(id)
    }

    async createStudent(student) {
        return this.repository.create(student);
    }
};
