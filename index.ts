import express, { Express, Request,Response } from "express";
import dotenv from 'dotenv';


dotenv.config();

//Express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;


app.get('/', (req:Request, res: Response) =>{
    res.send (" typescript1")
})

app.get('/hello', (req:Request, res: Response) =>{
    let name:string = req.query.name;
    if (!name){ name= "Anonimo"}
    
    res.status(200).json({ 
        data: "ok",
        message: "Hola, " + name
        
        })
})

app.get('/bye', (req:Request, res: Response) =>{
    res.status(200).json({ 
        data: "ok", 
        message: "Goodbye, world"
        
        })
})

app.listen ( port , ()=>{
    console.log(`Server listening on port ${port}`);
})