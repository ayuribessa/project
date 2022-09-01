import * as db from "../index.js";

export class StudentRepository {
    async findAll() {
        const conn = await db.connect();
        const query = "SELECT * FROM student";
        const students = await conn.query(query);

        return students;
    }

    async findById(id) {
        const conn = await db.connect();
        const query = "SELECT * FROM student WHERE id = ?"; //interrogação em vez do ${}, porque senão poderiamos injetar código 
        const [student] = await conn.query(query, [id]);

        return student;

    }

    async create(studentData) {
        const conn = await db.connect();
        const query = "INSERT INTO student(code,name,dob) VALUES (?,?,?)";
        const [student] = await conn.query(query, [
            studentData.id,
            studentData.name,
            studentData.dob
        ]);

        return student;
    }
}

