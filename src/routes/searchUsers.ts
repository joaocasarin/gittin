import { Router } from 'express';
import searchUsersController from '../controllers/searchUsersController';

const router = Router();

router.get('/githubUser', searchUsersController);

export default router;