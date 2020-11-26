import express from 'express';
import {
  getAllContacts,
  getById,
  putById,
  postContact,
} from '../controllers/ContactController';
import { signup } from '../controllers/UserController';

const router = express.Router();

router.get('/contacts', getAllContacts);
router.get('/contacts/:id', getById);
router.put('/contacts', putById);
router.post('/contact', postContact);
router.post('/signup', signup);

export default router;
