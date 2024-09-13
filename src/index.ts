import express, { Response, Application } from 'express';
import { Server } from 'http';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import CustomRequest from './types/customRequest';
import userRouter from './modules/userModule';
import authRouter from './modules/authModule';

var server:Server;

const initializeServer = async ()=>{
    console.log("Ready to use! ✅\n");
}

const shutDownServer = async () => {
    console.log("\nShutting server down...");
    server.close(()=>{
        console.log("Finished!👋\n");
    });
}

const port = 3000;
const app = express();

app.use(express.json());
app.use(authMiddleware);
app.use(logMiddleware);

app.use('/auth',authRouter);
app.use('/user',userRouter);

app.get("/health", (req:CustomRequest, res:Response)=>{
    return res.status(200).send({"data":"Heath Check - OK!"});
});

server = app.listen(port, async ()=>{
    console.log(`Server is running on port ${port}`);
    await initializeServer();
});

process.on('SIGINT',shutDownServer);
process.on('SIGTERM',shutDownServer);