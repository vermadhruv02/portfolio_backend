import express from 'express';
import { createAuth, findAuth, updateAuth, deleteAuth } from '../controller/auth/index.js'; // Import from the index.js in auth folder

const router = express.Router();

// Define your routes using the imported actions
router.post('/register', createAuth.create);
router.post('/find', findAuth.find);
router.put('/update/:id', updateAuth.update);
router.delete('/delete/:id', deleteAuth.deleteAuth);

export default router;
