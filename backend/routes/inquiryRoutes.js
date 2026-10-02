import express from 'express';
import { createInquiry, getInquiries, updateInquiryStatus } from '../controllers/inquiryController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', createInquiry);
router.get('/', verifyToken, getInquiries);
router.put('/:id', verifyToken, updateInquiryStatus);

export default router;
