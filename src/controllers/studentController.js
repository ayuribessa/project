import StudentService from "../services/StudentService.js";

async function get(request, response, next) {
    const payload = await new StudentService().getAllStudents();
    // const payload = await StudentService.getAllStudents();
    response.status(200).send(payload);
}

async function getById(request, response, next) {
    const payload = await new StudentService().getStudentById(request.params.id);
    // const payload = await StudentService.getById(req.params.id);
    response.status(200).send(payload);
}

async function post(request, response, next) {
    const payload = await new StudentService().createStudent(request.body);
    // const payload = await StudentService.getById(req.params.id);
    response.status(201).send(payload);
}