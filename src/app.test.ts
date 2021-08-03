import st from "supertest";
import app from "./app";

describe('GET /', () => {
    it('should return 200', async () => {
        const response = await st(app).get('/');
        expect(response.status).toBe(200);
    });

    it('should return "message: Success"', async () => {
        const response = await st(app).get('/');
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Success');
    });
})