import StudentService from "../services/StudentService.js";

async function get(request, response, next) {
    const payload = await new StudentService().getAllStudents();
    // const payload = await StudentService.getAllStudents(); a maneira que estava usando antes, sem instaciar o objeto
    response.status(200).send(payload);
};

async function getById(request, response, next) {
    const payload = await new StudentService().getStudentById(request.params.id);
    // const payload = await StudentService.getById(req.params.id);
    response.status(200).send(payload);
};

async function post(request, response, next) {
    try {
        const payload = await new StudentService().createStudent(request.body);
        // const payload = await StudentService.getById(req.params.id);
        response.status(201).send(payload);
    }
    catch (error) {
        response.status(400).send({
            message: error.message,
        });
    }
};

async function put(request, response, next) {

    try {
        const id = request.params.id;
        const body = request.body;
        //caso tenta fazer update em um usuário que não existe
        const oldStudent = await new StudentService().getStudentById(id);
        if (!oldStudent || oldStudent.lenght === 0)
            throw new Error(`Student with ID ${id} was not found`);

        const payload = await new StudentService().updateStudent(id, body);
        // const payload = await StudentService.getById(req.params.id);
        response.status(200).send(payload);
    }
    catch (error) {
        response.status(400).send({
            message: error.message,
        });
    }
};

exports.delete = async (request, response, next) => {

    try {
        const id = request.params.id;
        //caso tenta fazer update em um usuário que não existe
        const oldStudent = await new StudentService().getStudentById(id);
        if (!oldStudent || oldStudent.lenght === 0)
            throw new Error(`Student with ID ${id} was not found`);

        const payload = await new StudentService().deleteStudent(id);
        // const payload = await StudentService.getById(req.params.id);
        response.status(204).send(payload);
    }
    catch (error) {
        response.status(404).send({
            message: error.message,
        });
    }
};