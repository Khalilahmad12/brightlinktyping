import express from 'express';
import { createContact, getContacts, updateContactStatus, deleteContact } from '../controllers/contactController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', createContact);
router.get('/', verifyToken, getContacts);
router.put('/:id', verifyToken, updateContactStatus);
router.delete('/:id', verifyToken, deleteContact);

export default router;
