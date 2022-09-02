import { Router } from "express";
import studentController from "../controllers/studentController.js";

const router = Router();

router.get('/', studentController.get);
router.get('/:id', studentController.getById);
router.post('/', studentController.post);
router.put('/:id', studentController.put);
router.delete('/:id', studentController.delete);

export { router };

