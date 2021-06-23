import express, { Application, Request, Response } from "express";
import router from './routes';

const app: Application = express();

// Standard Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', (req: Request, res: Response) => {
    return res.status(200).send({ message: 'Success' });
});

app.use('/api', router);

export default app;