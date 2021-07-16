import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import searchUsersRoute from "./searchUsers";

const router = Router();

router.use(searchUsersRoute);

const createUserController = new CreateUserController();
router.post('/users', createUserController.handle);

export default router;