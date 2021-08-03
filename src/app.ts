import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from './routes';

const app: Application = express();

// Standard Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type']
}));

// Endpoints
app.get('/', (req: Request, res: Response) => {
    return res.status(200).send({ message: 'Success' });
});

app.use('/api', router);

export default app;