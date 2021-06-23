import { Router } from "express";
import searchUsersRoute from "./searchUsers";

const router = Router();

router.use(searchUsersRoute);

export default router;