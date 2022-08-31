import StudentService from "../services/StudentService.js";

async function get(request, response, next) {
    // const payload = await new StudentService().getAllStudents();
    const payload = await StudentService.getAllStudents();
    response.status(200).send(payload);
}