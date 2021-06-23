import st from "supertest";
import app from "../app";

describe('GET /api/githubUser', () => {
    it('should return total_count, incomplete_results and items(array)', async () => {
        const response = await st(app).get('/api/githubUser?user=github');

        expect(response.status).toBe(200);

        expect(response.body).toHaveProperty('total_count');
        expect(typeof response.body.total_count).toBe('number');

        expect(response.body).toHaveProperty('incomplete_results');
        expect(typeof response.body.incomplete_results).toBe('boolean');

        expect(response.body).toHaveProperty('items');
        expect(response.body.items instanceof Array).toBe(true);
    });
})