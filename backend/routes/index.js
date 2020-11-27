import express from 'express';
import {
  getAllContacts,
  getById,
  putById,
  postContact,
} from '../controllers/ContactController.js';
import { signup } from '../controllers/UserController.js';

const router = express.Router();

router.get('/contacts', getAllContacts);
router.get('/contacts/:id', getById);
router.put('/contacts', putById);
router.post('/contact', postContact);
router.post('/signup', signup);

router.get('/dd', function (req, res) {
  res.send('hello');
});
export default router;
