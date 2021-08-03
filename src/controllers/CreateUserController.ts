import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        try {
            const { name, email, admin, password } = request.body;

            const createUserService = new CreateUserService();

            const user = await createUserService.execute({ name, email, admin, password });
            
            // if(user instanceof Error) {
            //     return response.send({ error: user.message });
            // }

            return response.send(user);
        } catch (error) {
            return response.send({ error });
        }
    }
}

export { CreateUserController };