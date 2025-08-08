import { Router } from "express";
import { createProject, findProject, findAllProjects, updateProject, deleteProject } from '../controller/project/index.js'; // Assuming you have an index.js that exports all controllers
const router = Router();

// Define your project routes here
router.get('/', findAllProjects.findAll);
router.post('/create', createProject.create);
router.get('/find/:id', findProject.find);
router.put('/update/:id', updateProject.update);
router.delete('/delete/:id', deleteProject.deleteProject);

export default router;
