import axios from "axios";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    try {
        const userQuery = req.query.user;
        const githubSearchResponse = await axios.get(`https://api.github.com/search/users?q=${userQuery}`);     
        
        res.status(200).send(githubSearchResponse.data);
    } catch (error) {
        res.send({error});
    }
}