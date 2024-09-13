import express, {Request, Response} from 'express';

const port = 3000;
const app = express();


app.get("/", (req:Request, res:Response)=>{
    return res.send("Hello World. Atualizado");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})