import dotenv from "dotenv";
dotenv.config();
import app from "./app";

import { connection } from './database';


const port = process.env.PORT || 3000;

(async () => {
    try {
        await connection();
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
})();