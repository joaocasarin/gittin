import st from "supertest";
import app from "../app";

import { connection } from '../database';


beforeAll(async () => {
    await connection.create();
});

afterAll(async () => {
    await connection.close();
});

afterEach(async () => {
    await connection.clear();
});

describe('POST /api/user', () => {
    it('should return 200', async () => {
        const data = {
            "name": "joao",
            "password": "123",
            "email": "joao@123.com",
            "admin": true
        };

        const response = await st(app).post('/api/users').send(data);        

        expect(response.body).toHaveProperty('created_at');
    });
})