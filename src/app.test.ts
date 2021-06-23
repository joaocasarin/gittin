import st from "supertest";
import app from "./app";

describe('GET /', () => {
    it('should return 200 & valid response', async () => {
        const response = await st(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Success');
    })
})