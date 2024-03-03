import express from 'express';
import { postSignup, postLogin } from '../controller/authentication.controller';

const router = express.Router();

router.post("/login", postLogin);
router.post("/signup", postSignup);

export default router;