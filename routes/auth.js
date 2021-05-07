import { Router } from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller';
import * as verify from '../middlewares/auth';

router.post('/signin', authCtrl.signIn);

router.post('/signup', verify.checkDuplicateUsernameOrEmail, authCtrl.signUp);

export default router;