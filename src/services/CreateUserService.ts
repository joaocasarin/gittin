import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) {
            return new Error('Incorrect e-mail.');
        }

        const userAlreadyExists = await usersRepository.findOne({ email });

        if(userAlreadyExists) {
            return new Error('User already exists.');
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({ name, email, admin, password: passwordHash });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };