import st from "supertest";
import app from "../app";

import { connection } from '../database';


beforeAll(async () => {
    connection();
});

describe('POST /api/user', () => {
    it('should return 200', async () => {
        const response = await st(app).post('/api/users').send({
            "name": "123",
            "password": "123",
            "email": "docker@123.com",
            "admin": true
        });
        expect(response.body).toContain('"admin": true');
    });
})